import Service from '../Service';

import User from './User';

class UserService extends Service {
  create(...users) {
    if (!users.length) {
      return this.createObject(new User(), this.create.bind(this));
    }

    users = users.map(user => {
      if (user.toObject) {
        return user.toObject();
      }
      return user;
    });

    return this.createUsers({ users });
  }

  roles() {
    return this.callAsync('getAllRoles');
  }

  me() {
    return this.callAsync('getCurrentUser');
  }
}

export default UserService;
