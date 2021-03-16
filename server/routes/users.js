const router = require('express').Router();
let User = require('../models/user.model');

const bcrypt = require('bcrypt');
const saltRounds = 10;

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

router.route('/login').post((req, res) => {

    User.findOne({"username": req.body.username})
      .then((user) => {
        if(user) {
          bcrypt.compare(req.body.password, user.password, (error, response) => {

            if (error) {console.log(error)};

            if (response) {
              req.session.user = user;
              console.log(req.session.user);
              res.send(`Logging in...`)
            } else {
              res.send(`Wrong username/password combination.`)
            };
          })
        } else {
          res.send(`User doesn't exist.`)
        }
      })
      .catch(err => console.error(`Error: ${err}`));
});

router.route('/test').get((req, res) => {
    console.log(res.json('The test worked.'));
});

module.exports = router;