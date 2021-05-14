const { Router } = require("express");
const UserService = require("../services/userService");

const {
  createUserValid,
  updateUserValid,
} = require("../middlewares/user.validation.middleware");
const { responseMiddleware } = require("../middlewares/response.middleware");

const router = Router();

// TODO: Implement route controllers for user

router.post("/", function (req, res, next) {
  const result = UserService.save(req.body);
  if (result) {
    res.json(result);
  } else {
    res.status(400).send(`some error`);
  }
});

module.exports = router;
