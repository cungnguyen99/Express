var express = require('express')

var router = express.Router(); 

var controller=require('../controllers/user.controller');

var vali=require('../validate/user.validate')

router.get('/', controller.index)

router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:userId', controller.get)

router.post('/create', vali.validate, controller.postCreate)

module.exports=router