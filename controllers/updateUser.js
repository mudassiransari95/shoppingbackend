const User=require('../models/userModel')

async function updateUser(req,res){
    try {

        const sessionUser=req.userid

    const {userid,email,name,role} =req.body

        const user=await User.findById(sessionUser)

        console.log('user role',user.role)
       const payload={
        ...(email && {email:email}),
        ...(name && {name:name}),
        ...(role && {role:role})
       }
       console.log(payload)
       const updateuser=await User.findByIdAndUpdate(userid,payload)


        res.json({
            data:updateuser,
            message:'User updated Successfully',
            success:true,
            error:false
        })

    } catch (error) {
        res.json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}
module.exports=updateUser