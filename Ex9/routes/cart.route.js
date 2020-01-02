var express = require('express')

var router = express.Router(); 

var controller=require('../controllers/cart.controller');

//do /cart la mac dinh nen chi can router.get('/add/:productId')
router.get('/add/:productId', controller.addToCart)

module.exports=router