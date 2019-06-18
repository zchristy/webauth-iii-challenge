const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const secrets = require('../config/secrets.js')
const Users = require('../users/users-model.js');

module.exports = {
  restricted,
  checkRole
}

function restricted(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if(err) {
        //invalid token
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        // valid token
        req.user = {
          id: decodeToken.subject,
          access: decodeToken.access
        }
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'No Token Provided' });
  }
}

function checkRole(role) {
  return (req, res, next) => {
    console.log(role)
    if (req.user) {
      if(req.user.access && req.user.access.includes(role)) {
        next()
      } else {
        res.status(403).json({message: 'You dont have the right role'})
      }
    } else {
      res.status(401).json({message: 'you can not pass'})
    }
  }
}
