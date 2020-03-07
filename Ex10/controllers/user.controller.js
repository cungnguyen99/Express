var db=require('../db.js')

var md5=require('md5')

var User = require('../models/users.model')

module.exports.index=(req, res)=> User.find().then(function (users) {

                        res.render('users/index.pug',{

                            userList: users

                        })

})

module.exports.search=function(req, res){ 

    var val=req.query.nameQuery;

    User.find({name: new RegExp('^'+val+'$', "i")},function(err, doc) {

        res.render('users/index.pug',{

            userList:doc
    
        })
      });
}

module.exports.create=function(rep,res){

    res.render('users/create.pug');

}

module.exports.get= function(req, res){
    
    var idSearch=req.params.userId;

    User.findById(idSearch, function(err,data){
        res.render('users/view',{
            userInfo: data       
        });
    })
}

module.exports.postCreate=function(req,res){

    var data=new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: md5(req.body.pass)
    })
    
    data.save();

    res.redirect('/users');
}