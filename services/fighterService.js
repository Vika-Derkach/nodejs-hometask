const { FighterRepository } = require("../repositories/fighterRepository");

class FighterService {
  // TODO: Implement methods to work with fighters
  save = (fighter) => {
    if (fighter) {
      return FighterRepository.create(fighter);
    } else {
      return null;
    }
  };
  edit = (id, fighter) => {
    if (fighter && id) {
      return FighterRepository.update(id, fighter);
    } else {
      return null;
    }
  };
  getAll = () => {
    return FighterRepository.getAll();
  };
  delete = (id) => {
    if (id) {
      return FighterRepository.delete(id);
    } else {
      return null;
    }
  };
  search(search) {
    const item = FighterRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

module.exports = new FighterService();
