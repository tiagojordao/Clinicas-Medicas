import jwt from 'jsonwebtoken';

import User from '../models/UserModel';

class SessionController {
    async store (req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ where : { email } });

        if(!user){
            return res.status(401).json({ error: 'Incorrect Email!' });
        }

        if(!(await user.verifyPassword(password))) {
            return res.status(401).json({ error: 'Incorrect Password!' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },     
            token: jwt.sign({ id }, '06d55ed15c4611808874b8d29e74fad4', { expiresIn: '3d' }), 
        })
    }
}

export default new SessionController();