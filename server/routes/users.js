const router = require('express').Router();
let User = require('../models/user.model');

router.route('/register').post((req, res) => {
  console.log('got the post request')
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

module.exports = router;