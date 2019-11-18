exports.seed = function(knex) {
  return knex("steps").insert([
    { id: 1, howto_id: 1, instruction: "boil water", number: 1 },
    { id: 2, howto_id: 1, instruction: "put pasta in water", number: 2 },
    { id: 3, howto_id: 1, instruction: "take pasta out of water", number: 3 },
    { id: 4, howto_id: 2, instruction: "study hard", number: 1 },
    { id: 5, howto_id: 2, instruction: "study harder", number: 2 },
    {
      id: 6,
      howto_id: 2,
      instruction: "do your career assignments!",
      number: 3
    },
    { id: 7, howto_id: 3, instruction: "eat turkey", number: 1 },
    { id: 8, howto_id: 3, instruction: "eat cranberry sauce", number: 2 },
    { id: 9, howto_id: 3, instruction: "eat more cranberry sauce", number: 3 }
  ]);
};
