const express = require('express')
const bronze100lPinRoute =  express.Router();
const {Bronze100lPin}  = require('../model/bronze100lPin')

//To get list of subscribers
bronze100lPinRoute.get(`/`, async (req, res)=>{
    const bronze100lPin = await Bronze100lPin.find()
    if(!bronze100lPin) return status(400).send(Error.message)
   
res.send(bronze100lPin);
})

//To create activation pin
bronze100lPinRoute.post(`/create`, async (req, res)=>{
   
    let bronze100lPin = new Bronze100lPin({
        bronzePin:  req.body.bronzePin,
        
    })
    try {
        bronze100lPin = await bronze100lPin.save(); 

    
    return res.send('Pin creation successful');

  
    } catch (error) {
    return res.status(400).error.send('Pin creation unsuccessful');
    }
})

//To  use a pin
bronze100lPinRoute.post(`/login`, async (req, res)=>{
const bronze100lPin = await Bronze100lPin.findOne({
    bronzePin: req.body.bronzePin})

        if(bronze100lPin) {
            return res.status(200).send('pin is valid')}

            else{
                return   res.status(400).send('pin is valid');
            }
})

//To avoid a pin from been used twice 
bronze100lPinRoute.post(`/activate`, async (req, res)=>{
    const activateGold1 = "12456alex456" 
    const bronze100lPin = await Bronze100lPin.findOneAndDelete ({
        bronzePin: req.body.bronzePin})
    
            if(bronze100lPin) {
                return res.status(200).send({activateGold1:activateGold1})}
    
                else{
                    return   res.status(400).send('pin is not');
                }
    })


module.exports = bronze100lPinRoute;