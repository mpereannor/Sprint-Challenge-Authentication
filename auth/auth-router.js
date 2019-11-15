const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
  .then(saved => { 
    res.status(201).json(saved);
  })
  .catch(error => { 
    res.status(500).json(error)
  });
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findById({username})
  .first()
  .then(user => { 
    if(user && bcrypt.compareSync(password, user.password)) { 
      
    }
  })
});

module.exports = router;
