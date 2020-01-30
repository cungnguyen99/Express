var express = require('express')

var router = express.Router(); 

var multer  = require('multer')

var upload = multer({ dest: './public/uploads/' })

var controller=require('../controllers/product.controller');

router.get('/', controller.index)

router.get('/create', controller.create)

router.post('/create',
    upload.single('url'),
    upload.single('url_1'),
    upload.single('url_2'),
    upload.single('url_3'),
    upload.single('url_4'),
    controller.postCreate)

module.exports=router