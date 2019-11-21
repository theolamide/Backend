const db = require("../data/dbConfig.js");

module.exports = {
  add,
  remove,
  find,
  findByUser,
  findById,
  update
};

function find() {
  return db("howtos")
    .join("users", "howtos.user_id", "users.id")
    .select(
      "howtos.name",
      "howtos.desc",
      "howtos.user_id",
      "howtos.id",
      "users.username"
    );
}

function findByUser(userid) {
  return db("howtos").where({ user_id: userid });
}

async function add(howto) {
  const [id] = await db("howtos").insert(howto);
  return findById(id);
}

function findById(id) {
  return db("howtos")
    .where({ id })
    .first();
  // db("steps")
  //   .select("number", "instruction")
  //   .where({ howto_id: id })
}

function update(id, payload) {
  return db("howtos")
    .where({ id })
    .update(payload);
}

function remove(id) {
  return db("howtos")
    .where({ id })
    .del();
}
