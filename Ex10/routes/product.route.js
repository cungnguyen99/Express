var express = require('express')

var multer  = require('multer')

var router = express.Router(); 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
var upload = multer({ storage: storage })

var controller=require('../controllers/product.controller');

router.get('/', controller.index)

router.get('/create', controller.create)

router.post('/create',
    upload.array('url', 4),
    controller.postCreate)

module.exports=router