const addToCartModel = require("../models/cartProduct")


const countAddToCartProduct = async(req,res)=>{
    try{
        const userId = req.userId

        console.log('userId',userId)

        const count = await addToCartModel.countDocuments()

        res.json({
            data : {
                count : count
            },
            message : "ok",
            error : false,
            success : true
        })
    }catch(error){
        res.json({
            message : error.message || error,
            error : false,
            success : false,
        })
    }
}

module.exports = countAddToCartProduct