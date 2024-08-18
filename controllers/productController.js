const productCollection = require('../models/productSchema');

//API to show all products
const getAllProducts = async(req,res)=>{
    try {
        const products = await productCollection.find();
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

module.exports = {getAllProducts}