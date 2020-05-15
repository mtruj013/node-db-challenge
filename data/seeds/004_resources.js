
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: "wood",
          description: "it's..just wood"
        },
        {
          resource_name: "nails and hammer",
          description: "for connecting said wood"
        },
        {
          resource_name: "past projects",
          description: "cause I won't remember evrything on my own!"
        },
        {
          resource_name: "postman",
          description: "check them endpoints"
        },
        {
          resource_name: "seeds",
          description: "for planting!"
        },
        {
          resource_name: "shovel",
          description: "for digging!"
        }
      ]);
    });
};
