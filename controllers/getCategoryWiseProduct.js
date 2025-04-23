const productModel = require("../models/productModel")

const getCategoryWiseProduct=async(req,res)=>{
    try {
        const {category}=req?.body

        const product = await productModel.find({category}) 
         
        // console.log("helo hello hello hello",product)

       return res.json({
            data:product,
            message:'Product',
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

module.exports=getCategoryWiseProduct