const { UserRepository } = require("../repositories/userRepository");

class UserService {
  // TODO: Implement methods to work with user
  save = (user) => {
    if (user) {
      return UserRepository.create(user);
    } else {
      return null;
    }
  };
  edit = (id, user) => {
    if (user && id) {
      return UserRepository.update(id, user);
    } else {
      return null;
    }
  };
  getAll = () => {
    return UserRepository.getAll();
  };
  delete = (id) => {
    if (id) {
      return UserRepository.delete(id);
    } else {
      return null;
    }
  };
  search(search) {
    const item = UserRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

module.exports = new UserService();
