import User from '../models/UserModel';

class PatientController {
  async index(req, res) {
    const patients = await User.findAll({
      where: { position: 'PACIENTE' },
      attributes: ['name', 'position'],
    });

    return res.json(patients);
  }
}

export default new PatientController();
