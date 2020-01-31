const jwt = require('jsonwebtoken');
const makeToken = (user)=>{      //put in middlewares
    const payload = {
      sub: user.id,
      username: user.username,
      department: user.department,
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