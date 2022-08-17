const express = require('express')
const { modelName } = require('../model/User')
const User = require('../model/User')



exports.register = async (req, res) => {
    try {
        console.log("........................................", req.body)
        if (req.body.name === "" || req.body.email === "") {
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
}
exports.login = async (req, res) => {
    try {
        console.log("...................login details", req.body)
        if (req.body.email === "" || req.body.password == "") {
            res.send('invalid')
        } else {
            console.log('im here')
            const user = await User.findOne({ email: req.body.email })
            if(user){
                if(user.password==req.body.password){
                    console.log("correct credentials")
                    console.log(user)
                    res.status(200).json(user)
                }else{
                    res.send('invalid')
                }
            }
           

        }
    } catch (error) {
        console.log(error)
    }
}


