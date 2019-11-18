const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HowTo = require("../models/howto-model.js");
// const { validateUser } = require("../helpers/auth-helper");

router.get("/", (req, res) => {
  HowTo.find()
    .then(howto => {
      res.json(howto);
    })
    .catch(err =>
      res.status.json({ message: "failed to get howtos", error: err })
    );
});

router.get("/:id", (req, res) => {
  HowTo.findById(req.params.id)
    .then(howto => {
      res.json(howto);
    })
    .catch(err =>
      res.status.json({ message: "failed to get howtos", error: err })
    );
});

router.post("/", (req, res) => {
  HowTo.add(req.body)
    .then(howto => {
      res.json(howto);
    })
    .catch(err =>
      res.status.json({ message: "failed to add howto", error: err })
    );
});

module.exports = router;
