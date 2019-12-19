var db=require('../db')

module.exports.requireAuth=function(req, res, next){

    //kiem tra neu chua co userid nao tren cookie thi bat phai dang nhap moi cho xem tiep
    if(!req.cookies.idUser){

        res.redirect('/auth/login')

        return;

    }

    var user=db.get('users').find({id: req.cookies.idUser}).value();    

    //kiem tra tiep neu co userId tren cookie roi nhung k co id do trong database thi cung bat login lai
    if(!user){

        res.redirect('/auth/login')

        return;

    }

    //neu co user roi thi thuc hien middleware tiep theo
    next();
}