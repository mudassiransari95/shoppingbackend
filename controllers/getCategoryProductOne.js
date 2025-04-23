const productModel = require("../models/productModel")



const getCategoryController=async(req,res)=>{
    try {
        const productCotegory=await productModel.distinct('category')

        // console.log('category ',productCotegory)

        //array to store one product to each category
        const productByCategory=[]

        for(const category of productCotegory){
            const product =await productModel.findOne({category})


        if(product){
            productByCategory.push(product)
        }

        }

        res.json({
            message:'category product',
            data:productByCategory,
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

module.exports=getCategoryController