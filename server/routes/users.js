const router = require('express').Router();
let User = require('../models/user.model');

router.route('/register').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let newUser = new User({
      username,
      password
  });

  newUser.save()
      .then(() => console.log(res.json('User added!')))
      .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/login').get((req, res) => {

    User.findOne({"username": req.body.username, "password": req.body.password})
      .then(result => {
        if(result) {
          res.send(`User found: ${result}.`)
        } else {
          res.send(`Wrong username/password combination.`)
        }
      })
      .catch(err => console.error(`Error: ${err}`));

    // User.find({"username": req.body.username, "password": req.body.password})
    //     .then((user) => {
    //       if(user.length > 0) {
    //         res.send('User found: ' + user);
    //       } else {
    //         res.send("Wrong username/password combination");
    //       }
    //     })
    //     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/test').get((req, res) => {
    res.send('The test worked.')
});

module.exports = router;