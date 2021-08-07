const express = require('express')
const gold100lCardRoute =  express.Router();
const {Gold100lCard}  = require('../model/gold100lCard')


gold100lCardRoute.get(`/`, async (req, res)=>{
    const gold100lCard = await Gold100lCard.find()
    if(!gold100lCard) return status(400).send(Error.message)
   
res.send(gold100lCard);
})

gold100lCardRoute.post(`/`, async (req, res)=>{
   
    let gold100lCard = new Gold100lCard({
        goldCardRef:  req.body.goldCardRef,
        goldCard:  req.body.goldCard,
        
    })
    try {
        gold100lCard = await gold100lCard.save(); 

     
 return res.status(200).send({GoldCard:"this is premuim 100l card"});
    } catch (error) {
    return res.status(400).error.send('transaction unsuccessful');
    }
})



module.exports = gold100lCardRoute;