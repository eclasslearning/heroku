const express = require('express')
const silver100lCardRoutes =  express.Router();
const {Silver100lCard}  = require('../model/silver100lCard')


silver100lCardRoutes.get(`/`, async (req, res)=>{
    const silver100lCard = await Silver100lCard.find()
    if(!silver100lCard) return status(400).send(Error.message)
   
res.send(silver100lCard);
})

silver100lCardRoutes.post(`/`, async (req, res)=>{
   
    let silver100lCard = new Silver100lCard({
        silverCardRef:  req.body.silverCardRef,
        silverCard:  req.body.silverCard,
        
    })
    try {
        silver100lCard = await silver100lCard.save(); 

     
 return res.status(200).send({silverCard:"This is silvercard"});
    } catch (error) {
    return res.status(400).error.send('transaction unsuccessful');
    }
})



module.exports = silver100lCardRoutes;