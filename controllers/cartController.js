const userCollection = require('../models/userSchema');
const productCollection=require('../models/productSchema')

// API to get cart by userId
const cartByUserId = async(req,res)=>{
    try {
        const userId = req.params.userid;
        const showCartById = await userCollection.findById(userId);
        if(!showCartById){
            res.status(400).json("Invalid Id details");
        }
        res.status(200).json(showCartById.cartItems);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

// API to get cart Products
const cartProductsByUserId = async(req,res)=>{
    try {
        const userId = req.params.userid;
        const showCartById = await userCollection.findById(userId);
        const cart=showCartById.cartItems;
        const productIds = cart.map(item => item.productId.toString());
        
        const products = await productCollection.find({ _id: { $in: productIds } });
        const result = products.map(p=>{
            const cartItem = cart.find(cartItem => cartItem.productId.toString() === p._id.toString());
            return {
                _id:p._id,
                productName: p.name,
                price: p.salePrice,
                image: p.image,
                quantity:cartItem ? cartItem.quantity : 0
            }
        });
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}


// API to update cart from content in body
const cartUpdate = async(req,res)=>{
    try {
        const items=req.body;
        const userId=req.params.userid;
        // Validate input
        if (!Array.isArray(items)) {
            return res.status(400).json({ error: 'Invalid items array' });
        }

        if (!userId) {
            return res.status(400).json({ error: 'Cart ID is required' });
        }
        const itemUpdate = await userCollection.updateOne({_id:userId},{$set:{cartItems:items}});
        if(!itemUpdate){
            res.status(400).json("item not updated")
        }
        res.status(200).json({ message: 'Cart updated successfully' ,itemUpdate});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

module.exports={cartByUserId,cartUpdate,cartProductsByUserId};