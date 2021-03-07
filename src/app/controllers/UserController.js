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
}

export default new UserController();
