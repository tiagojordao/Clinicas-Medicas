import Sequelize from 'sequelize';

import UserModel from '../app/models/UserModel';
import AppointmentModel from '../app/models/AppointmentModel';

import dbConfig from '../config/database';

const models = [UserModel, AppointmentModel];

class DatabaseLoader {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
    AppointmentModel.associate(this.connection.models);

  }
}

export default new DatabaseLoader();
