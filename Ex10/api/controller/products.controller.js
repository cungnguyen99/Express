var Product = require('../../models/products.model')

module.exports.index = function (req, res) {

    Product.find().then(function (products) {

        res.json(products)

    })
}

module.exports.get=function(req, res){

    var id=req.params.id

    Product.findById(id)
    .then(function(product){
        res.json(product)
    })
    .catch(function(err){
        res.json({
            confirmation: 'fail',
            message: 'Product '+id +' not found'
        })
    })
}

module.exports.update=function(req, res){

    var query=req.query

    var productId=query.id

    delete query['id']

    Product.findByIdAndUpdate(productId, query, {new: true})
    .then(function(product){
        res.json(product)
    })
    .catch(function(err){
        res.json({
            confirmation: 'fail',
            message: 'Product '+id +' not found'
        })
    })
}

module.exports.remove=function(req, res){

    var id=req.query.id

    Product.findByIdAndRemove(id)
    .then(function(product){
        res.json({
            confirmation: 'success',
            message: 'Product successflly remove.'
        })
    })
    .catch(function(err){
        res.json({
            confirmation: 'fail',
            message: 'Product '+id +' not found'
        })
    })
}

module.exports.create = function (req, res) {

    var data={
        name: req.body.name,
        genre: req.body.genre,
        country: req.body.country,    
        time: req.body.time,
        cast: req.body.cast,
        imdb: req.body.imdb,
        manufacture_year: req.body.year,
        image: req.body.url,
        image_1: req.body.url_1,
        image_2: req.body.url_2,
        image_3: req.body.url_3,
        image_4:req.body.url_4,
        description: req.body.description,
    }
    Product.create(data)
    .then(function(product){
        res.json(product)
    })
    .catch(function(err){
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
}