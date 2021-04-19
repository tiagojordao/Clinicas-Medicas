import User from '../models/UserModel';

class EmployeeController {
  async index(req, res) {
    const employee = await User.findAll({
      where: {
            position: ['MEDICO', 'ATENDENTE'],
        },
      attributes: ['name', 'position'],
    });

    return res.json(employee);
  }
}

export default new EmployeeController();
