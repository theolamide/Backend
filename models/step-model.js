const db = require("../data/dbConfig.js");

module.exports = {
  add,
  remove,
  find,
  findByStep,
  update
};

function find(id) {
  return db("steps")
    .select("number", "instruction")
    .where({ howto_id: id });
}

function findByStep(id, number) {
  return db("steps").where({ howto_id: id, number: number });
}

async function add(step) {
  const [id] = await db("steps").insert(step);
  return find(id);
}

function update(howtoid, number, payload) {
  return db("steps")
    .where({ howto_id: howtoid, number: number })
    .update(payload);
}

function remove(howtoid, number) {
  return db("steps")
    .where({ howto_id: howtoid, number: number })
    .del();
}
