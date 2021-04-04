const router = require('express').Router();
let User = require('../models/user.model');
require('dotenv').config();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"]

  if (!token) {
    res.send("There is no token. Please try again.")
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.json({auth: false, message: "You failed to authenticate."})
      } else {
        req.userId = decoded.id; // saving token into a variable userId so we don't have to re-verify with every request
        next();
      }
    })
  }
}

router.route('/register').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {

    if (err) {console.log(err)};

    let newUser = new User({
          username,
          password: hash
      });

    newUser.save()
      .then(() => console.log('User added!'))
      .catch(err => console.error(`Error: ${err}`));
  })
});

router.route('/login').get((req, res) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user})
  } else {
    res.send({loggedIn: false})
  }
});

router.get('/isUserAuth', verifyJWT, ((req, res) => {
  res.send("You are authenticated.")
}));

router.route('/login').post((req, res) => {

    User.findOne({"username": req.body.username})
      .then((user) => {
        if(user) {
          bcrypt.compare(req.body.password, user.password, (error, response) => {

            if (error) {console.log(error)};

            if (response) {
              const id = user._id;
              const token = jwt.sign({id}, process.env.JWT_SECRET, {
                expiresIn: 300,
              });

              req.session.user = user;

              res.json({auth: true, token: token, result: user._id}); // remove the user later for security reasons!
              
            } else {
                res.json({auth: false, message: 'Wrong username/password combination.'});
            };
          })
        } else {
          res.json({auth: false, message: 'No user exists.'});
        }
      })
      .catch(err => console.error(`Error: ${err}`));
});

module.exports = router;