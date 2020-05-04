var db=require('../db')

var User = require('../models/users.model');

module.exports.requireAuth=function(req, res, next){

    //kiem tra neu chua co userid nao tren cookie thi bat phai dang nhap moi cho xem tiep
    if(!req.signedCookies.idUser){

        res.redirect('/auth/login')

        return;

    }
  
    User.findOne({ id: req.signedCookies.idUser }).then( user => {
    
    //kiem tra tiep neu co userId tren cookie roi nhung k co id do trong database thi cung bat login lai

        if (!user) {

            res.redirect('/auth/login');
            
            return;
        }
        res.locals.user=user

    })
    .catch( err => console.log(err));

    //neu co user roi thi thuc hien middleware tiep theo
    next();
}