const express=require('express')
const userSignUpController = require('../controllers/userSignUp')
const userSigninController = require('../controllers/userSignin')
const userDetailsController = require('../controllers/user.Details')
const authToken = require('../middleware/authToken')
const userLogout = require('../controllers/userLogout')
const allUsers = require('../controllers/allUsers')
const updateUser = require('../controllers/updateUser')
const uploadProductController = require('../controllers/uploadProduct')
const getProductController = require('../controllers/getProduct')
const updateProductController = require('../controllers/updateProduct')
const getCategoryController = require('../controllers/getCategoryProductOne')
const getCategoryWiseProduct = require('../controllers/getCategoryWiseProduct')
const getProductDetails = require('../controllers/getProductDetails')
const addToCartController = require('../controllers/addToCartController')
const countAddToCartProduct = require('../controllers/countAddToCartProduct')
const  addToCartViewProduct= require('../controllers/addToCartVeiwProduct')
const updateAddToCartProduct = require('../controllers/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controllers/deleteAddToCartProduct')
const searchProduct = require('../controllers/searchProduct')
const getcategorylist = require('../controllers/getcategorylist')
const forgotPassword = require('../controllers/forgotPassword')


const router=express.Router()




router.post('/register',userSignUpController)
router.post('/signin',userSigninController)
router.get('/user_details',authToken,userDetailsController)
router.get('/userLogout',userLogout)


// admin panel

router.get('/all-user',authToken,allUsers)
router.post('/update-user',authToken,updateUser)

//  product 

router.post('/upload-product',authToken,uploadProductController)
router.get('/get-product',getProductController)
router.post('/update-product',authToken,updateProductController)
router.get('/get-categoryProduct',getCategoryController)
router.post('/category-product',getCategoryWiseProduct)
router.post('/product-details',getProductDetails)
router.get("/search",searchProduct)


router.post('/addtocart',authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get('/view-card-product',authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
 
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

router.post('/getcategorylist/:Category',getcategorylist)




module.exports=router