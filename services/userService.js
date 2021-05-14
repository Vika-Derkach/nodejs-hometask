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

  search(search) {
    const item = UserRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

module.exports = new UserService();
