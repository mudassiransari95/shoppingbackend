const uploadProductPermission = require("../helpers/permission")
const productModel = require("../models/productModel")


async function uploadProductController(req,res){
    try {
        const sessionUserid=req.userid
        

        if(!uploadProductPermission(sessionUserid)){
            throw new Error('Permissio denied')
        }

        const uploadproduct=new productModel(req.body)

        const saveProduct=await uploadproduct.save()

        // console.log('saveProduct',saveProduct)

        res.status(201).json({

            message:'Product upload Successfully',

            error:false,

            success:true,

            data:saveProduct

        })

    } catch (error) {

        res.json({

            message:error.message||error,

            error:true,

            success:false

        })

    }

}

module.exports=uploadProductController