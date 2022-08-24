
import express from 'express'
import modelName from '../model/User.js'
import User from '../model/User.js'
import jwt from 'jsonwebtoken'
import fetch from 'node-fetch'

const youtubeApiKey='AIzaSyC87sI8sEK3S7YP9smCG1EhWihdUh4fJCs'
const url ='https://www.googleapis.com/youtube/v3'


export const controller = {

    register : async (req, res) => {
        try {
            console.log("........................................", req.body)
            if (req.body.name === "" || req.body.email === "" || req.body.password == "" || req.body.password != req.body.rpass) {
                res.send('invalid credentials')
                // res.status(500).json('invalid credentials')
                console.log('invalid credentials')
            } else {
    
                const user = new User(req.body)
                await user.save()
                res.status(201).json('user created successfully')
    
            }
        } catch (error) {
            console.log('error')
        }
    },
    login : async (req, res) => {
        console.log(req.body)
        try {
            console.log("...................login details", req.body)
            if (req.body.email === "" ) {
                res.status(401).json('Invalid Email')
                console.log('Invalid Email')
            } else {
                console.log('im here')
                const user = await User.findOne({ email: req.body.email })
                if(user){
                    if(user.password==req.body.password){
                        console.log("correct credentials")
                        const accessToken = jwt.sign({id:user._id},'mySecretKey') 
                        res.json({
                            id:user._id,username:user.name,email:user.email,accessToken
                        })
                    }else{
                        res.send('Invalid Password')
                    }
                }else{
                    res.send('Invalid Email')
                }
                
    
            }
        } catch (error) {
            console.log(error)
        }
    },
    
    getYoutube : async(req,res) =>{
        console.log("got youtube request")
        fetch(`${url}`+'/search?part=snippet&q=BrototypeMalayalam&key='+`${youtubeApiKey}`).then((response)=>{
            console.log(response)
        })
        res.send("request received for youtube data")
    }
}

