import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {

  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        notes: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'doctor_id', as: 'doctor' });
    this.belongsTo(models.User, { foreignKey: 'patient_id', as: 'patient' });
  }
}

export default Appointment;
