
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          task_description: "gather supplies",
          task_notes: "which type of wood to use?",
          completed: false
        },
        {
          project_id: 1,
          task_description: "build desk",
          task_notes: "magic!",
          completed: false
        },
        {
          project_id: 2,
          task_description: "decide data",
          task_notes: "what should the api return?",
          completed: false
        },
        {
          project_id: 2,
          task_description: "build api",
          task_notes: "magic!",
          completed: false
        },
        {
          project_id: 3,
          task_description: "garther supplies",
          task_notes: "best store for value?",
          completed: false
        },
        {
          project_id: 3,
          task_description: "have beautiful garden",
          task_notes: "magic!",
          completed: false
        }
      ]);
    });
};
