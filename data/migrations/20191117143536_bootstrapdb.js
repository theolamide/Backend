exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();

      users
        .string("username", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
      users
        .string("email", 255)
        .unique()
        .notNullable();
      users.integer("usertype").notNullable();
    })
    .createTable("howtos", howtos => {
      howtos.increments();

      howtos
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      howtos.string("name", 255).notNullable();
      howtos.string("desc", 255).notNullable();
    })
    .createTable("steps", steps => {
      steps.increments();

      steps
        .integer("howto_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("howtos")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      steps.integer("number").notNullable();
      steps.string("instruction").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("howtos")
    .dropTableIfExists("users");
};
