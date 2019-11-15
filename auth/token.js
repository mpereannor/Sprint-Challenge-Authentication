const jwt = require('jsonwebtoken');

const generateToken = user => {
    const payload = {
        subject: user.id,
        username: user.username,
    }
    
    const options = { 
        expiresIn: '1d',
    }

    const result =  jwt.sign(
        payload,
        'SECRET SECRET',
        options
        )
        return result;
}
        
module.exports = generateToken;