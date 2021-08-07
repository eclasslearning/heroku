const express = require('express')
const silver100lPinRoute =  express.Router();
const {Silver100lPin}  = require('../model/silver100lPin')

//To get list of subscribers
silver100lPinRoute.get(`/`, async (req, res)=>{
    const silver100lPin = await Silver100lPin.find()
    if(!silver100lPin) return status(400).send(Error.message)
   
res.send(silver100lPin);
})

//To create activation pin
silver100lPinRoute.post(`/create`, async (req, res)=>{
   
    let silver100lPin = new Silver100lPin({
        silverPin:  req.body.silverPin,
        
    })
    try {
        silver100lPin = await silver100lPin.save(); 

    
    return res.send('Pin creation successful');

  
    } catch (error) {
    return res.status(400).error.send('Pin creation unsuccessful');
    }
})

//To create use a pin
silver100lPinRoute.post(`/login`, async (req, res)=>{
const silver100lPin = await Silver100lPin.findOne({
    silverPin: req.body.silverPin})

        if(silver100lPin) {
            return res.status(200).send('pin is valid')}

            else{
                return   res.status(400).send('pin is valid');
            }
})

//To avoid a pin from been used twice 
silver100lPinRoute.post(`/activate`, async (req, res)=>{
    const activateGold1 = "12456alex456" 
    const silver100lPin = await Silver100lPin.findOneAndDelete ({
        silverPin: req.body.silverPin})
    
            if(silver100lPin) {
                return res.status(200).send({silverPin:activateGold1})}
    
                else{
                    return   res.status(400).send('pin is not');
                }
    })


module.exports = silver100lPinRoute;