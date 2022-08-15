const express = require('express')
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



