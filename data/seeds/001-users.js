exports.seed = function(knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "user",
      password: "password",
      email: "bob",
      usertype: 1
    },
    {
      id: 2,
      username: "rowValue2",
      password: "jim",
      email: "jim",
      usertype: 1
    },
    {
      id: 3,
      username: "rowValue3",
      password: "bill",
      email: "bill",
      usertype: 1
    }
  ]);
};
