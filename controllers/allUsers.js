
const User=require('../models/userModel')

async function allUsers(req,res){
    try {
        // console.log('userid all user',req.userid)
        const allUser=await User.find()
        res.json({
            message:'All User',
            data:allUser,
            error:false,
            success:true

        })
    } catch (error) {
        res.json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}
module.exports=allUsers