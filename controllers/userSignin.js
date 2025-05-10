
const User=require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
async function userSigninController(req,res){
try {
  const {email,password}=req.body

  if(!email){
    throw new Error('please provide email')

  }
  if(!password){
    throw new Error('please provide password')

  } 
  const signinUser=await User.findOne({email})

  console.log('sign innnnnnnnnnnnnnn',signinUser)

  if(!signinUser){

    throw new Error('user not found')

  }
  
  const chechPassword=await bcrypt.compareSync( password,signinUser.password)

console.log('checkpassword',chechPassword)

if(chechPassword){

  const Tokendata={

_id:signinUser._id,

email:signinUser.email

  }

 const Token=await jwt.sign(Tokendata, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});
 
const TokenOption={

  httpOnly:true,

   secure:true

} 

 res.cookie('token',Token,TokenOption)

}

else {

  throw new Error('please check password')

}

} catch (error) {

  res.json({

    message:error.message||error,

    error:true,

    success:false

})

}

}

module.exports=userSigninController


