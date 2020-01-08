var express = require('express')

var router = express.Router(); 

var controller=require('../controller/products.controller');

router.get('/', controller.index)

router.post('/', controller.create)

router.get('/update', controller.update)

router.get('/:id', controller.get)

module.exports=router