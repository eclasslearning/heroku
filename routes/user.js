const express = require('express')
const userRoutes =  express.Router();
const {User}  = require('../model/user')
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

userRoutes.get(`/`, async (req, res)=>{
    const user = await User.find()
    if(!user) return status(400).send(Error.message)

    



    
res.send(user);
})

//to find if a user email exist
userRoutes.get(`/:email`, async (req, res)=>{
User.findOne({email:req.params.email},(err, result) =>{
    if(err) return res.status(500).json({msg:err});
    if(result !== null){
        return res.json({
            status: true
        });
    }else
    return res.json({
        status:false,
    })
})
})

//to create a new user
userRoutes.post(`/`, async (req, res)=>{
    let user = new User({
        name:  req.body.name,
        email:  req.body.email,
        passwordHash:  bcrypt.hashSync(req.body.password,10),
        phoneNumber:  req.body.phoneNumber,
        isAdmin:   req.body.isAdmin,
        department:  req.body.department,
    })
    try {
        user = await user.save(); 
       res.send(user)
    } catch (error) {
        res.send(error.message)
        console.log(error.message)
    }
})

//To login a user
userRoutes.post(`/login`, async (req, res)=>{
    const secret = process.env.secret
    const user = await User.findOne({
        email: req.body.email
    })
    if(!user) {
        return res.status(400).send('User does not exist')}
   if(user &&  bcrypt.compareSync(req.body.password, user.passwordHash)){
       const token = jwt.sign(
           {
               userId: user.id
           },
           secret
       )
       //user:user.email,
    return res.status(200).send({token:token});
   } else{
    return res.status(400).send('password is incorrect');
   }
 
})

//User forggotten password
userRoutes.patch(`/update/:email`, async (req, res)=>{
    User.findOneAndUpdate(
        {email:req.params.email},
        {$set: {password:req.params.password}},(err, message) =>{
        if(err) return res.status(500).json({msg:err});
       const msg = {
           msg: "password successfully updated",
           email: req.params.email,};
           return res.json(msg)
      
        });
    });
  

module.exports = userRoutes;