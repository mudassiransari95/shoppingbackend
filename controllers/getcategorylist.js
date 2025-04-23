
const productModel=require('../models/productModel')



const getcategorylist=async(req,res)=>{

const category=req.params.Category
    console.log('params',req.params.Category)

    try {
        const allcategory=await productModel.find({category})
        return    res.json({
            data:allcategory,
            message:'data fetched successfully',
            error:false,
            success:true
        })
    } catch (error) {
        return    res.json({
            message:error.message||error,
            error:true,
            success:false
        })
    }




}
module.exports=getcategorylist