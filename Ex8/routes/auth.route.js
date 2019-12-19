var express = require('express')

var router = express.Router(); 

var controller=require('../controllers/auth.controller');

//Khi chay link auth/login thi se chay router nay
router.get('/login', controller.login)

//Khi nhan login thi no se chay router nay
router.post('/login', controller.postLogin)

module.exports=router