const express=require('express');
const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
//user registration
router.post('/register',async(req,res)=>{
    try{
       const {name, email, password}=req.body
       const userExists=await User.findOne({email})
       if(userExists){
        return res.status(400).json({message:'User already exists'})
    
       } 
       const newUser=new User({name,email,password});
       await newUser.save();
       res.status(201).json({message:'User registerd succesfully'})

    }catch (error){
        res.status(500).json({message:'server error',error})
    }
});
router.post('/login',async(req,res){
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email})
    }
})
