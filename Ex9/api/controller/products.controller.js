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

module.exports.create = async function (req, res) {

    var product=await Product.create(req.body)

    res.json(product)
}