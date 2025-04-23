
const User=require('../models/userModel')
const bcrypt = require('bcryptjs');
    async function userSignUpController(req,res){
  
    try {


        const {email,password,name}=req.body


        if(!email){


            throw new Error('please provide email')

        
        }

        let userCheck=await User.findOne({email})

        if(userCheck){

            throw new Error('user allready exists')
            
        }

        if(!password){

            throw new Error('please provide password')

        }

        if(!name){

            throw new Error('please provide name')

        }

        const salt =await bcrypt.genSaltSync(10);

        const hashpassword =await bcrypt.hashSync(password, salt);

        if(!hashpassword){

            throw new Error('somthing is wrong')

        }
let payload={
    ...req.body,
    role:"GENERAL",
    password:hashpassword
}
        const userCreate=await User.create(payload)

        res.status(201).json({
    
    data:userCreate,
    success:true,
    message:"user created Successfully"

    })

    } catch (error) {

        res.json({
            message:error.message||error,
            error:true,
            success:false
        })

    }

    }

module.exports=userSignUpController


