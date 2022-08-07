const express = require('express')
const app = express();
const dotenv= require ('dotenv')

dotenv.config()
const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server started on port ${PORT}`))


app.get('/',(req,res)=>{
    res.send("api is running")  
})  
