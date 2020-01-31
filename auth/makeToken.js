const jwt = require('jsonwebtoken');
const makeToken = (user)=>{ 
  
   const payload = {
      sub: user.id,
      username: user.username
    };
    const options = {
      expiresIn: '12h',
    };
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,   
      options,
    );
    
    return token;
  
}
module.exports = makeToken;