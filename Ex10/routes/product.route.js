var express = require('express')

var multer  = require('multer')

var router = express.Router(); 

var middleware=require('../middleware/auth.middleware')

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

router.get('/create',middleware.requireAuth, controller.create)

//phải cho cái search trên cái view mới chạy được. không hiểu sao
router.get('/search', controller.search)

router.get('/:productId', controller.get)

router.post(
    '/create',
    upload.array('url', 4),
    controller.postCreate)

module.exports=router