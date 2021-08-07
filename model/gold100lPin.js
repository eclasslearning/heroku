const mongoose = require('mongoose')
const gold100lPinSchema = mongoose.Schema({
    goldPin: {
        type: String,
        required: true
    },
   
    })

    gold100lPinSchema.virtual('id').get(function () {
        return this._id.toHexString()
    })
    gold100lPinSchema.set('toJSON',{
        virtuals:true
    })
    exports.Gold100lPin = mongoose.model('Gold100lPin', gold100lPinSchema);
    exports.gold100lPinSchema = gold100lPinSchema;

   