import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        position: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
