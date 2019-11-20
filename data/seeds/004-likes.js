exports.seed = function(knex) {
  return knex("likes").insert([
    { id: 1, howto_id: 1, user_id: 1 },
    { id: 2, howto_id: 1, user_id: 2 },
    { id: 3, howto_id: 1, user_id: 3 },
    { id: 4, howto_id: 2, user_id: 1 },
    { id: 5, howto_id: 2, user_id: 2 },
    { id: 6, howto_id: 2, user_id: 3 },
    { id: 7, howto_id: 3, user_id: 1 },
    { id: 8, howto_id: 3, user_id: 2 },
    { id: 9, howto_id: 3, user_id: 3 }
  ]);
};
