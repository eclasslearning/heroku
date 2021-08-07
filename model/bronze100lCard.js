const mongoose = require('mongoose')
const bronzeCardShema = mongoose.Schema({
    bronzeCardRef:{
        type: String,
        
    },
    bronzeCard: {
        type: String,
        required: true
    },
   
    })

    bronzeCardShema.virtual('id').get(function () {
        return this._id.toHexString()
    })
    bronzeCardShema.set('toJSON',{
        virtuals:true
    })
    exports.Bronze100lCard = mongoose.model('Bronze100lCard', bronzeCardShema);
    exports.bronzeCardShema = bronzeCardShema;

   