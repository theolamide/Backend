module.exports = {
  validateHowTo
};

function validateHowTo(howto) {
  let errors = [];

  if (!howto.name) {
    errors.push("Please include a name for this guide");
  }

  if (!howto.desc) {
    errors.push("Please include a desc");
  }

  if (!howto.user_id) {
    errors.push("Please include a user_id");
  }

  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
