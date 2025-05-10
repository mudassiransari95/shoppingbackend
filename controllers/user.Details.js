const User=require('../models/userModel')

async function userDetailsController(req,res){
    try {
        console.log('userid',req.userid)
        const userdetail=await User.findById(req.userid)
        // console.log('userdetails  dddddddddddddddddddddddddd',userdetail) 
        // console.log('hello')
        res.status(200).json({
            data:userdetail,
            error:false,
            success:true,
            message:'user Details'
        })
    } catch (error) {
        res.json({
            message:error.message||error,
            error:true,
            success:false,
            
        })
        
    }
}
module.exports=userDetailsController