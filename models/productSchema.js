const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    shortDescription:{
        type:String,
        required:true
    },
    bestSellingRank:{
        type:Number,
        required:true
    },
    thumbnailImage:{
        type:String,
        required:true
    },
    salePrice:{
        type:Number,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    customerReviewCount:{
        type:Number,
        required:true
    },
    shipping:{
        type:String,
        required:true
    },
    salePrice_range:{
        type:String,
        required:true
    },
    objectID:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:true
    }
    
})


const Product = mongoose.model("products",productSchema);
module.exports = Product;