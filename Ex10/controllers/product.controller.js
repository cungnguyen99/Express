var Product = require('../models/products.model')

module.exports.postCreate = function (req, res) {

    var paths = req.files.map(file => file.path.split(/[\\/]/).slice(1).join('/'))

    var data = new Product({
        name: req.body.name,
        genre: req.body.genre,
        country: req.body.country,
        time: req.body.time,
        cast: req.body.cast,
        imdb: req.body.imdb,
        manufacture_year: req.body.year,
        image: paths,
        description: req.body.description,
    })

    data.save();

    res.redirect('/product');
}

module.exports.create = function (req, res) {

    res.render('product/create');

}

module.exports.get = function (req, res) {

    var idSearch = req.params.productId;

    Product.findById(idSearch, function (err, data) {
        if (err) return;
        res.render('product/view', {
            productInfo: data
        });
    })
}

module.exports.search = function (req, res) {

    var val = req.query.name;

    Product.find({ name: new RegExp('^' + val + '$', "i") }, function (err, doc) {
        if (err) return;
        res.render('product/index.pug', {

            films: doc

        })
    });
}
module.exports.index = function (req, res) {

    var page = parseInt(req.query.page) || 1

    var perPage = 9;

    var start = (page - 1) * perPage

    var end = page * perPage

    var pageArr = ([page, page + 1, page + 2]) || [1, 2, 3]

    Product.find().limit(end).skip(start).then(function (products) {

        res.render('product/index.pug', {

            films: products,

            products: pageArr,

            page: page

        })

    })
}