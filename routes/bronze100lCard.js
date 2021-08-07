const express = require('express')
const bronze100lCardRoutes =  express.Router();
const {Bronze100lCard}  = require('../model/bronze100lCard')


bronze100lCardRoutes.get(`/`, async (req, res)=>{
    const bronze100lCard = await Bronze100lCard.find()
    if(!bronze100lCard) return status(400).send(Error.message)
   
res.send(bronze100lCard);
})

bronze100lCardRoutes.post(`/`, async (req, res)=>{
   
    let bronze100lCard = new Bronze100lCard({
        bronzeCardRef: req.body.bronzeCardRef,
        bronzeCard:  req.body.bronzeCard,
        
    })
    try {
        bronze100lCard = await bronze100lCard.save(); 

     
 return res.status(200).send({bronzeCard:"i am basic 100l card"});
    } catch (error) {
    return res.status(400).error.send('transaction unsuccessful');
    }
})



module.exports = bronze100lCardRoutes;