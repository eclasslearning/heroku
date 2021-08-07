const mongoose = require('mongoose')
const silver100lCardSchema = mongoose.Schema({
    silverCardRef: {
        type: String,
        required: false
    },
    silverCard: {
        type: String,
        required: true
    },
   
    })

    silver100lCardSchema.virtual('id').get(function () {
        return this._id.toHexString()
    })
    silver100lCardSchema.set('toJSON',{
        virtuals:true
    })
    exports.Silver100lCard = mongoose.model('Silver100lCard', silver100lCardSchema);
    exports.silver100lCardSchema = silver100lCardSchema;

   