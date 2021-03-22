import User from '../models/UserModel';

class UserController {
  async index(req, res) {
    const employees = await User.findAll();

    return res.status(200).json(employees);
  }

  async store(req, res) {
    const emailVerify = await User.findOne({
      where: { email: req.body.email },
    });

    if (emailVerify) {
      return res.status(400).json({ error: 'Email em uso!' });
    }

    const { id, name, phone, email, position } = await User.create(req.body);

    return res.json({ id, name, email, phone, position });
  }

  async update(req, res) {
    const user = await User.findByPk(req.params.id);

    const { id, name, phone, email, position } = await user.update(req.body);

    return res.status(200).json({ id, name, phone, email, position });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    if (user) {
      user.destroy();

      const { id, name } = user;

      return res.status(200).json({ id, name });
    }

    return res.status(400).json({ message: 'User not found!' });
  }
}

export default new UserController();
