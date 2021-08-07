const mongoose = require('mongoose')
const gold100lCardSchema = mongoose.Schema({
    goldCardRef: {
        type: String,
        required: false
    },
   
    goldCard: {
        type: String,
        required: true
    },
   
    })

    gold100lCardSchema.virtual('id').get(function () {
        return this._id.toHexString()
    })
    gold100lCardSchema.set('toJSON',{
        virtuals:true
    })
    exports.Gold100lCard = mongoose.model('Gold100lCard', gold100lCardSchema);
    exports.gold100lCardSchema = gold100lCardSchema;

   