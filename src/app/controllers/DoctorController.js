import User from '../models/UserModel';

class DoctorController {
  async index(req, res) {
    const doctors = await User.findAll({
      where: { position: 'Medico' },
      attributes: ['name', 'position'],
    });

    return res.json(doctors);
  }
}

export default new DoctorController();
