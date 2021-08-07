const mongoose = require('mongoose')
const userShema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false
    },
    department: {
        type: String
    }
    })

    userShema.virtual('id').get(function () {
        return this._id.toHexString()
    })
    userShema.set('toJSON',{
        virtuals:true
    })
    exports.User = mongoose.model('User', userShema);
    exports.userShema = userShema;

   