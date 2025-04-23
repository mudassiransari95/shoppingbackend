
const User=require('../models/userModel')
const bcrypt = require('bcryptjs');
    async function forgotPassword(req,res){
  
    try {


        const {email,password}=req.body


        if(!email){


            throw new Error('please provide email')

        
        }

        if(!password){

            throw new Error('please provide password')

        }
    const is_admin=await User.findOne({email})

      if(is_admin.role==="Admin"){
        return
      }

        const salt =await bcrypt.genSaltSync(10);

        const hashpassword =await bcrypt.hashSync(password, salt);

        if(!hashpassword){

            throw new Error('somthing is wrong')

        }

       const updateUser=await User.findOneAndUpdate({email},{$set:{password}})

        res.status(201).json({
    
    data:updateUser,
    success:true,
    message:"password change Successfully"

    })

    } catch (error) {

        res.json({
            message:error.message||error,
            error:true,
            success:false
        })

    }

    }

module.exports=forgotPassword


