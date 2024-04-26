const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Authentication failed' });
    }
};