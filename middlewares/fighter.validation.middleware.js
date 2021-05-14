const { fighter } = require("../models/fighter");
const checkProperties = (data) => {
  if (data.health && !(80 < data.health < 120)) {
    return "health";
  }
  if (!(1 < data.power < 100)) {
    return "power";
  }
  if (!(data.defense < 3)) {
    return "defense";
  }
  return true;
};

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during creation

  const { id, name, health, power, defense } = req.body;

  // TODO: Implement validatior for user entity during creation
  if (name && power && defense && !id) {
    const errorMessage = checkProperties(fighter);
    if (errorMessage !== true) {
      return res.status(400).json({
        error: true,
        message: errorMessage,
      });
    }
    next();
  } else {
    res.status(400).json({
      error: true,
      message: "Some field doesnt exist",
    });
  }
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during update
  next();
};

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
