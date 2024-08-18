const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartItems:
        [{
            productId:
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'products',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
});

const User = mongoose.model("user",userSchema);
module.exports = User