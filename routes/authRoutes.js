const { Router } = require("express");
const AuthService = require("../services/authService");
const { responseMiddleware } = require("../middlewares/response.middleware");
const userService = require("../services/userService");

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    try {
      // TODO: Implement login action (get the user if it exist with entered credentials)
      const { email, password } = req.body;
      const user = userService.search({ email, password });
      res.json(user);
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

module.exports = router;
