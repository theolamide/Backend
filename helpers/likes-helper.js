const db = require("../data/dbConfig.js");

module.exports = {
  validateLike,
  validateLikePost
};

function validateLike(like) {
  let errors = [];

  if (!like.user_id) {
    errors.push("Please include a user_id for this like");
  }

  if (!like.howto_id) {
    errors.push("Please include a howto_id for this like");
  }

  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
function validateLikePost(like) {
  let errors = [];
  validateLike(like);
  if (db("likes").where({ howto_id: like.howto_id, user_id: like.user_id })) {
    errors.push("This like exists, you can't like it twice");
  }
  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
