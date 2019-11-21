const router = require("express").Router();

const HowTo = require("../models/howto-model.js");
const { validateHowTo } = require("../helpers/howto-helper");
const Step = require("../models/step-model.js");
const { validateStep, validateStepPost } = require("../helpers/step-helper");
const Like = require("../models/likes-model.js");
const { validateLike, validateLikePost } = require("../helpers/likes-helper");

router.get("/", (req, res) => {
  HowTo.find()
    .then(howto => {
      res.json(howto);
    })
    .catch(err => {
      console.log(err);
      res.status(401).json({ message: "failed to get howtos", error: err });
    });
});

router.get("/:id", (req, res) => {
  HowTo.findById(req.params.id)
    .then(howto => {
      res.json(howto);
    })
    .catch(err => {
      res.status(400).json({ message: "failed to get howtos", error: err });
    });
});

router.post("/", (req, res) => {
  let howto = req.body;
  const validateResult = validateHowTo(howto);

  if (validateResult.isSuccessful === true) {
    HowTo.add(req.body)
      .then(howto => {
        res.json(howto);
      })
      .catch(err =>
        res.status(400).json({ message: "failed to add howto", error: err })
      );
  } else {
    res
      .status(400)
      .json({ message: "invalid howto info", errors: validateResult.errors });
  }
});

router.put("/:id", (req, res) => {
  let howto = req.body;
  const validateResult = validateHowTo(howto);

  if (validateResult.isSuccessful === true) {
    HowTo.update(req.params.id, req.body)
      .then(howto => {
        res.json(howto);
      })
      .catch(err =>
        res.status(400).json({ message: "failed to update howto", error: err })
      );
  } else {
    res
      .status(400)
      .json({ message: "invalid howto info", errors: validateResult.errors });
  }
});

router.delete("/:id", (req, res) => {
  HowTo.remove(req.params.id)
    .then(howto => {
      res.json(howto);
    })
    .catch(err => {
      res.status(401).json({ message: "record not deleted", error: err });
    });
});

router.get("/:id/steps", (req, res) => {
  Step.find(req.params.id)
    .then(step => {
      res.json(step);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "failed to get steps", error: err });
    });
});

router.get("/:id/steps/:number", (req, res) => {
  Step.findByStep(req.params.id, req.params.number)
    .then(step => {
      res.json(step);
    })
    .catch(err => {
      res.status(400).json({ message: "failed to get step", error: err });
    });
});

router.post("/:id/steps", (req, res) => {
  let step = {
    number: req.body.number,
    instruction: req.body.instruction,
    howto_id: req.params.id
  };
  const validateResult = validateStepPost(step);

  if (validateResult.isSuccessful === true) {
    Step.add(step)
      .then(step => {
        res.json(step);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ message: "failed to add step", error: err });
      });
  } else {
    res
      .status(400)
      .json({ message: "invalid step info", errors: validateResult.errors });
  }
});

router.put("/:id/steps/:number", (req, res) => {
  let step = req.body;
  const validateResult = validateStep(step);

  if (validateResult.isSuccessful === true) {
    Step.update(req.params.id, req.params.number, step)
      .then(step => {
        res.json(step);
      })
      .catch(err =>
        res.status(400).json({ message: "failed to update step", error: err })
      );
  } else {
    res
      .status(400)
      .json({ message: "invalid step info", errors: validateResult.errors });
  }
});

router.delete("/:id/steps/:number", (req, res) => {
  Step.remove(req.params.id, req.params.number)
    .then(step => {
      res.json(step);
    })
    .catch(err => {
      res.status(401).json({ message: "record not deleted", error: err });
    });
});

router.get("/likes", (req, res) => {
  Like.find()
    .then(like => {
      res.json(like);
    })
    .catch(err => {
      res.status.json({ message: "failed to get likes", error: err });
    });
});

router.get("/:id/likes", (req, res) => {
  Like.findByHowTo(req.params.id)
    .then(like => {
      res.json(like);
    })
    .catch(err => {
      res.status(400).json({ message: "failed to get likes", error: err });
    });
});

router.get("/:id/likes", (req, res) => {
  Like.findByUser(req.body)
    .then(like => {
      res.json(like);
    })
    .catch(err => {
      res.status(400).json({ message: "failed to get likes", error: err });
    });
});

router.post("/likes", (req, res) => {
  let like = req.body;
  const validateResult = validateLikePost(like);

  if (validateResult.isSuccessful === true) {
    Like.add(req.body)
      .then(like => {
        res.json(like);
      })
      .catch(err =>
        res.status(400).json({ message: "failed to add like", error: err })
      );
  } else {
    res
      .status(400)
      .json({ message: "invalid like info", errors: validateResult.errors });
  }
});

router.delete("/:id/likes", (req, res) => {
  Like.remove(req.params.id)
    .then(like => {
      res.json(like);
    })
    .catch(err => {
      res.status(401).json({ message: "like not deleted", error: err });
    });
});

module.exports = router;
