const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) =>
{
    const token = req.cookies.accessToken; 

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    try
{
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        if (verified.type === 'refresh') 
        {
            return res.status(403).json({ message: 'Invalid token type' }); 
        }

        req.user = verified;
        next();
}       catch (err) 
    {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authenticateToken;