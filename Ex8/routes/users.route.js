var express = require('express')

var router = express.Router(); 

var controller=require('../controllers/user.controller');

router.get('/', controller.index)

router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:userId', controller.get)

router.post('/create', controller.postCreate)

module.exports=router