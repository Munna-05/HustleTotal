const express = require('express')
const cors = require('cors')
const app = express();
const dotenv= require ('dotenv')
const authRouter=require('./routes/auth')
const userRouter = require('./routes/user')
const mongoose = require('mongoose')

const apiKey = "AIzaSyC87sI8sEK3S7YP9smCG1EhWihdUh4fJCs"

const apiUrl = "https://www.googleapis.com/youtube/v3"; 

// const youtube = google.youtube({
//   version: "v3",
//   auth: apiKey,
// });



app.use(cors())
app.use(express.json())

dotenv.config()
const PORT = process.env.PORT || 5000



app.get('/',(req,res)=>{
    res.send("api is running")  
})  

mongoose.connect('mongodb+srv://munna:munna123@cluster0.hcyg4.mongodb.net/Hustlers?retryWrites=true&w=majority').then(()=>{
    console.log("DataBase connection successfull")
}).catch(()=>{
    console.log('Connection Error')
})


app.use('/auth',authRouter)
app.use('/user',userRouter)



app.listen(PORT,console.log(`server started on port ${PORT}`))
  