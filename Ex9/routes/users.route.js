var express = require('express')

var multer  = require('multer')

var router = express.Router(); 

var upload = multer({ dest: './public/uploads/' })

var controller=require('../controllers/user.controller');

var middleware=require('../middleware/auth.middleware')

var vali=require('../validate/user.validate')

router.get('/', controller.index)

router.get('/search', controller.search)

router.get('/create', controller.create)

//truoc khi xem view user thi phai bat nguoi dung dang nhap
router.get('/:userId', controller.get)

//truoc khi tao user moi cung bat nguoi dung dang nhap
router.post('/create',
    upload.single('avatar'), 
    vali.validate, 
    controller.postCreate)

module.exports=router