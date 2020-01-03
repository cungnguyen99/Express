var Product = require('../../models/products.model')

module.exports.index = function (req, res) {

    Product.find().then(function (products) {

        res.json(products)

    })
}