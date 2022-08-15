const express=require('express')


exports.register=async (req,res)=>{
    console.log(req.body)
    res.send('hello ')
}