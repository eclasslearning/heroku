const mongoose = require('mongoose')
const bronze100lPinSchema = mongoose.Schema({
    bronzePin: {
        type: String,
        required: true
    },
   
    })

    bronze100lPinSchema.virtual('id').get(function () {
        return this._id.toHexString()
    })
    bronze100lPinSchema.set('toJSON',{
        virtuals:true
    })
    exports.Bronze100lPin = mongoose.model('Bronze100lPin', bronze100lPinSchema);
    exports.bronze100lPinSchema = bronze100lPinSchema;

   