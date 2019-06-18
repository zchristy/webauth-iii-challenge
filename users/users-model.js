const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByRole
};

function find() {
  return db('users').select('id', 'username', 'password', 'role');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findByRole(role) {
  return db('users').where('role', 'like', `%${role}%`);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
