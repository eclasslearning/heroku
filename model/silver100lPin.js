const mongoose = require('mongoose')
const silver100lPinSchema = mongoose.Schema({
    silverPin: {
        type: String,
        required: true
    },
   
    })

    silver100lPinSchema.virtual('id').get(function () {
        return this._id.toHexString()
    })
    silver100lPinSchema.set('toJSON',{
        virtuals:true
    })
    exports.Silver100lPin = mongoose.model('Silver100lPin', silver100lPinSchema);
    exports.silver100lPinSchema = silver100lPinSchema;

   