var express = require('express')

var router = express.Router(); 

var controller=require('../controllers/transfer.controller');

var middleware=require('../middleware/auth.middleware')

router.get('/create', controller.create)

router.post('/create',middleware.requireAuth, controller.postCreate)

module.exports=router