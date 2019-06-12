
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'zach',
          password: 'pass'
        },
        {
          username: 'paige',
          password: 'pass'
        },
        {
          username: 'bekah',
          password: 'pass'
        }
      ]);
    });
};
