const express = require('express')
const gold100lPinRoute =  express.Router();
const {Gold100lPin}  = require('../model/gold100lPin')

//To get list of subscribers
gold100lPinRoute.get(`/`, async (req, res)=>{
    const gold100lPin = await Gold100lPin.find()
    if(!gold100lPin) return status(400).send(Error.message)
   
res.send(gold100lPin);
})

//To create activation pin
gold100lPinRoute.post(`/create`, async (req, res)=>{
   
    let gold100lPin = new Gold100lPin({
        goldPin:  req.body.goldPin,
        
    })
    try {
        gold100lPin = await gold100lPin.save(); 

    
    return res.send('Pin creation successful');

  
    } catch (error) {
    return res.status(400).error.send('Pin creation unsuccessful');
    }
})

//To  use a pin
gold100lPinRoute.post(`/login`, async (req, res)=>{
const gold100lPin = await Gold100lPin.findOne({
    goldPin: req.body.goldPin})

        if(gold100lPin) {
            return res.status(200).send('pin is valid')}

            else{
                return   res.status(400).send('pin is valid');
            }
})

//To avoid a pin from been used twice 
gold100lPinRoute.post(`/activate`, async (req, res)=>{
    const activateGold1 = "12456alex456" 
    const gold100lPin = await Gold100lPin.findOneAndDelete ({
        goldPin: req.body.goldPin})
    
            if(gold100lPin) {
                return res.status(200).send({goldPin:activateGold1})}
    
                else{
                    return   res.status(400).send('pin is not');
                }
    })


module.exports = gold100lPinRoute;