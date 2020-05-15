
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'standing desk',
          description: 'make standing desk',
          completed: false
        },
        {
          name: 'Harry Potter API',
          description: 'make HP sorting hat api',
          completed: false
        },
        {
          name: 'garden',
          description: 'redo balcony garden',
          completed: false
        }
      ]);
    });
};
