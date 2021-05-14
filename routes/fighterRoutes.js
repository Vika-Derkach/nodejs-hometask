const { Router } = require("express");
const FighterService = require("../services/fighterService");
const { responseMiddleware } = require("../middlewares/response.middleware");
const {
  createFighterValid,
  updateFighterValid,
} = require("../middlewares/fighter.validation.middleware");

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/", function (req, res, next) {
  const result = FighterService.getAll();
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`Fighter not found`);
  }
});
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const result = FighterService.search({ id });
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`Fighter not found`);
  }
});
router.post("/", createFighterValid, function (req, res, next) {
  const result = FighterService.save(req.body);
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`Fighter not found`);
  }
});
router.put("/:id", updateFighterValid, function (req, res, next) {
  const { id } = req.params;
  const result = FighterService.edit(id, req.body);
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`Fighter not found`);
  }
});
router.delete("/:id", function (req, res, next) {
  const { id } = req.params;
  const result = FighterService.delete(id);
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`Fighter not found`);
  }
});
module.exports = router;
