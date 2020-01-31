const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel');
const makeToken = require('./makeToken')

router.post('/register', (req, res) => {
  const { username, password} = req.body;
  const bcryptHash = bcrypt.hashSync(password, 10);
  const user = {
    username,
    password:bcryptHash
  };
  Users.insert(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(error => {
      res.status(500).json({error: 'User not created'});
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
         const token = makeToken(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, token: token});
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
