var db=require('../db.js')

var md5=require('md5')

module.exports.login=function(req, res){ 

    res.render('auth/authLogin')

}

module.exports.postLogin=function(req,res){

    //req.body.Ten-gi-do thi Ten-gi-do phai trung voi ten cua thuoc tinh name trong input
    var email = req.body.emailLogin;

    var pass= req.body.passLogin;

    var user=db.get('users').find({email: email}).value();

    if(!user){

        res.render('auth/authLogin',{

            error: ['User dose not exists.'],

            values: req.body

        })

        return;

    }

    if(user.passWord!==md5(pass)){

        res.render('auth/authLogin',{

            error: ['Wrong password.'],

            values: req.body

        })

        return;

    }

    res.cookie('idUser', user.id, {
        signed: true
    })

    res.redirect('/users')
}