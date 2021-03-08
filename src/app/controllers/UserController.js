import User from '../models/UserModel';

class UserController {
  async store(req, res) {
    const emailVerify = await User.findOne({
      where: { email: req.body.email },
    });

    if (emailVerify) {
      return res.status(400).json({ error: 'Email em uso!' });
    }

    const { name, phone, email, position } = await User.create(req.body);

    return res.json({ name, email, phone, position });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    if (user) {
      user.destroy();
      return res.status(200).json({ message: 'User Deleted!' });
    }

    return res.status(400).json({ message: 'User not found!' });
  }
}

export default new UserController();
