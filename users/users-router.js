const router = require('express').Router();

const Users = require('./users-model.js');
const mw = require('../middleware/middleware.js');

router.get('/students', mw.restricted, mw.checkRole('student'), (req, res) => {
  Users.find()
    .then(users => {
      const students = users.filter(user => {
        return user.role.includes("student")
      })
      if(students.length > 0){
        res.json({students, user: req.user});
      } else {
        res.json({message: "No users with the role of students"})
      }
    })
    .catch(err => res.send(err));
});

router.get('/instructors', mw.restricted, mw.checkRole('instructor'), (req, res) => {
  Users.find()
    .then(users => {
        res.json({users, user: req.user});
    })
    .catch(err => res.send(err));
});

router.get('/tas', mw.restricted, mw.checkRole('ta'), (req, res) => {
  Users.find()
    .then(users => {
        res.json({users, user: req.user});
    })
    .catch(err => res.send(err));
});

module.exports = router;
