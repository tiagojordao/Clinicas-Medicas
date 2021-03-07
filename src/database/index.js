import Sequelize from 'sequelize';

import UserModel from '../app/models/UserModel';

import dbConfig from '../config/database';

const models = [UserModel];

class DatabaseLoader {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new DatabaseLoader();
