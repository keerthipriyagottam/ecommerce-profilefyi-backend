const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get('/cartbyuserid/:userid',cartController.cartByUserId)
router.post('/update/:userid',cartController.cartUpdate);
router.get('/cartProducts/:userid',cartController.cartProductsByUserId)

module.exports = router;