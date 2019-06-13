const router = require('express').Router();

const Users = require('./users-model.js');
const mw = require('../middleware/middleware.js');

router.get('/students', mw.restricted, mw.checkRole(process.env.STUDENT), (req, res) => {
  Users.findByRole('student')
    .then(users => {
      res.status(200).json({users, user: req.user})
    })
    .catch(err => res.send(err));
});

router.get('/instructors', mw.restricted, mw.checkRole(process.env.INSTRUCTOR), (req, res) => {
  Users.findByRole('instructor')
    .then(users => {
        res.json({users, user: req.user});
    })
    .catch(err => res.send(err));
});

router.get('/tas', mw.restricted, mw.checkRole(process.env.TA), (req, res) => {
  Users.findByRole('ta')
    .then(users => {
        res.json({users, user: req.user});
    })
    .catch(err => res.send(err));
});

module.exports = router;
