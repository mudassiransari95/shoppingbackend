const express=require('express')

 const app=express()
const routerapi=require('./routes/index')
const connectToDB=require('./config/db')
const cookieParser = require('cookie-parser')

const cors=require('cors')

require('dotenv').config()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
 
 
let port=5050;  
  
app.use('/api',routerapi)
 
app.get('/',(req,res)=>{
    res.send('welcome to home page')

}) 
   
connectToDB().then(()=>{
    app.listen(port,()=>{
        console.log('connected to mongodb successfully')
        console.log(`server is running on port ${port}`)
    })
})
 