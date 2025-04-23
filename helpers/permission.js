const UserModel=require('../models/userModel')
const uploadProductPermission=async(userid)=>{
const user =await UserModel.findById(userid)
if(user.role!=='ADMIN'){
    return false
}
return true

}
module.exports=uploadProductPermission