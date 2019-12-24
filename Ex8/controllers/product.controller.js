var db=require('../db.js')

module.exports.index=function(req, res){

    //page bang gia tri cua bien page khi truy cap neu co con khong thi bang 1. vd product?page=3
    var page=parseInt(req.query.page)||1

    var perPage=8;

    var start=(page-1)*perPage

    var end=page*perPage

    var pageArr=([page,page+1, page+2])||[1,2,3]

    res.render('product/index.pug',{

        userList:db.get('product').value().slice(start,end),
        
        products: pageArr,

        page: page

    })

    res.render('/product/:page',{
        
    })
}