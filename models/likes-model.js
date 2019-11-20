const db = require("../data/dbConfig.js");

module.exports = {
  add,
  remove,
  find,
  findByUser,
  findByHowTo
};

function find() {
  return db("likes");
}

function findByUser(userid) {
  return db("likes").where({ user_id: userid });
}

async function add(like) {
  const [id] = await db("likes").insert(like);
  return findById(id);
}

function findByHowTo(id) {
  return db("likes").where({ howto_id: id });
}

function remove(userid, howtoid) {
  return db("likes")
    .where({ user_id: userid, howto_id: howtoid })
    .del();
}
