// const router = require("express").Router();

// const Step = require("../models/step-model.js");
// const { validateStep } = require("../helpers/step-helper");

// router.get("/:id/steps", (req, res) => {
//   Step.find(req.params.id)
//     .then(step => {
//       res.json(step);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).json({ message: "failed to get steps", error: err });
//     });
// });

// router.get("/:id/steps/:number", (req, res) => {
//   Step.findByStep(req.params.id, req.params.number)
//     .then(step => {
//       res.json(step);
//     })
//     .catch(err => {
//       res.status(400).json({ message: "failed to get step", error: err });
//     });
// });

// router.post("/:id/steps", (req, res) => {
//   let step = req.body;
//   const validateResult = validateStep(step);

//   if (validateResult.isSuccessful === true) {
//     Step.add(req.body, { howto_id: id })
//       .then(step => {
//         res.json(step);
//       })
//       .catch(err =>
//         res.status(400).json({ message: "failed to add step", error: err })
//       );
//   } else {
//     res
//       .status(400)
//       .json({ message: "invalid step info", errors: validateResult.errors });
//   }
// });

// router.put("/:id/steps/:number", (req, res) => {
//   let step = req.body;
//   const validateResult = validateStep(step);

//   if (validateResult.isSuccessful === true) {
//     Step.update(req.params.id, req.params.number, req.body)
//       .then(step => {
//         res.json(step);
//       })
//       .catch(err =>
//         res.status(400).json({ message: "failed to update step", error: err })
//       );
//   } else {
//     res
//       .status(400)
//       .json({ message: "invalid step info", errors: validateResult.errors });
//   }
// });

// module.exports = router;
