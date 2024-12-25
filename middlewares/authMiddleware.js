const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.isAuth=async(req,res,next)=>{
    try{

     const token = req.header('Authorization')
    
     var decoder = jwt.verify(token,process.env.privateKey)

     if(!decoder){return res.status(404).json({msg:'ynejimich yodkhel'})}

     const user = await User.findById(decoder.id)
     req.user = user
     
        next()
    }catch(err){

    }
}


// middlewares/authMiddleware.js
/*const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isAuth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.privateKey);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ msg: 'Token is not valid' });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = { isAuth };*/




