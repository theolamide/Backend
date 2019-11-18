exports.seed = function(knex) {
  return knex("howtos").insert([
    {
      id: 1,
      user_id: 2,
      name: "make pasta",
      desc: "it's easier than you think"
    },
    {
      id: 2,
      user_id: 3,
      name: "lambda",
      desc: "it's harder than you think"
    },
    {
      id: 3,
      user_id: 3,
      name: "thanksgiving",
      desc: "it's turkey"
    }
  ]);
};
