var db=require('../db.js')

var shortid=require('shortid')
module.exports.create=function(req, res, next){
    res.render('transfer/index')
}

module.exports.postCreate=function(req, res, next){

    var data={
        id: shortid.generate(),
        acount: req.body.account,
        amount: parseInt(req.body.amount),
        /**
         * them userid de biet ai gui, va phai bat dang nhap roi moi cho gui. khi da dang nhap roi
         * thi se co userid de su dung ben duoi con neu k dang nhap se k co userid-> k cho gui
         */
        userId: req.signedCookies.idUser
        
    }

    db.get('transfer').push(data).write()

    res.redirect('/transfer/create')
}