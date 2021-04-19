import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (req, res, next) => {
    const headerToken = req.headers.authorization;

    if(!headerToken) {
        return res.status(401).json({ error: 'Missing Token!' });
    }

    const [, token] = headerToken.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, '06d55ed15c4611808874b8d29e74fad4');

        req.userId = decoded.id;

        return next();
    } catch(err) {
        return res.status(401).json({ error: 'Invalid Token!' });
    }
}