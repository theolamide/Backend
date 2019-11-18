const db = require("../data/dbConfig.js");

module.exports = {
  validateStep,
  validateStepPost
};

function validateStep(step) {
  let errors = [];

  if (!step.number) {
    errors.push("Please include a number for this step");
  }

  if (!step.instruction) {
    errors.push("Please include an instruction");
  }

  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
function validateStepPost(step) {
  let errors = [];
  validateStep(step);
  if (db("steps").where({ howto_id: step.howto_id, number: step.number })) {
    errors.push("This step exists, please use a put request to edit");
  }
  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
