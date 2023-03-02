const jwt = require('jsonwebtoken');
const User = require('../models/userSchema')

// It is use for user will not able to go any page without login
const authenticate = async (req, res, next) => {
    try {
        // Authenticate the token for login
        const token = req.cookies.jwttoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if(!rootUser) {
            throw new Error('User Not Found');
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        
        next();
    }
    catch (error) {
        res.status(401).send('Unauthorized: No token provided')
        console.log(error);
    }
}

module.exports = authenticate;