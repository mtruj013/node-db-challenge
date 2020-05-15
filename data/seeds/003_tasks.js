
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: "gather supplies",
          notes: "which type of wood to use?",
          completed: false
        },
        {
          project_id: 1,
          description: "build desk",
          notes: "magic!",
          completed: false
        },
        {
          project_id: 2,
          description: "decide data",
          notes: "what should the api return?",
          completed: false
        },
        {
          project_id: 2,
          description: "build api",
          notes: "magic!",
          completed: false
        },
        {
          project_id: 3,
          description: "garther supplies",
          notes: "best store for value?",
          completed: false
        },
        {
          project_id: 3,
          description: "have beautiful garden",
          notes: "magic!",
          completed: false
        }
      ]);
    });
};
