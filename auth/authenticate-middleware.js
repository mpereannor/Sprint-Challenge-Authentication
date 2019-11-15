/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if(token){
    jwt.verify(
      token, 
      'SECRET SECRET',
      (error, decodedToken) => { 
        if (error) { 
          res.status(401).json({ message: error.meassage + ' you shall not pass!' })
        } else { 
          req.decodedToken = decodedToken;
          next()
        }
      }
    )
  } else { 
    res.status(400).json({ 
      message: 'No credentials provided!'
    })
  }
};
