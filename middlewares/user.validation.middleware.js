const { user } = require("../models/user");
const checkProperties = (data) => {
  if (!data.email.includes("@gmail.")) {
    return false;
  }
  if (data.phoneNumber.length === 12) {
    return false;
  }
  if (!data.password < 3) {
    return false;
  }
  return true;
};
const createUserValid = (req, res, next) => {
  const { id, firstName, lastName, email, phoneNumber, password } = req.body;
  // TODO: Implement validatior for user entity during creation
  if (
    firstName &&
    lastName &&
    email &&
    phoneNumber &&
    password &&
    !id &&
    !checkProperties(user)
  ) {
    next();
  } else {
    res.status(401).send();
  }
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update

  next();
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
