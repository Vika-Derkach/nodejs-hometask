const { Router } = require("express");
const UserService = require("../services/userService");

const {
  createUserValid,
  updateUserValid,
} = require("../middlewares/user.validation.middleware");
const { responseMiddleware } = require("../middlewares/response.middleware");
const { request } = require("chai");

const router = Router();

// TODO: Implement route controllers for user

router.get("/", function (req, res, next) {
  const result = UserService.getAll();
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`User not found`);
  }
});
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const result = UserService.search({ id });
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`User not found`);
  }
});
router.post("/", createUserValid, function (req, res, next) {
  const userByEmail = UserService.search({
    email: req.body.email,
  });
  if (userByEmail) {
    res.status(400).send(`User already exists with this email`);
  }
  const userByPhoneNumber = UserService.search({
    phoneNumber: req.body.phoneNumber,
  });
  if (userByPhoneNumber) {
    res.status(400).send(`User already exists with this number`);
  }
  const result = UserService.save(req.body);
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`User not found`);
  }
});
router.put("/:id", updateUserValid, function (req, res, next) {
  const { id } = req.params;
  const result = UserService.edit(id, req.body);
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`User not found`);
  }
});
router.delete("/:id", function (req, res, next) {
  const { id } = req.params;
  const result = UserService.delete(id);
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`User not found`);
  }
});

module.exports = router;
