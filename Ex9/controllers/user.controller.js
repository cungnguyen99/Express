var shortid=require('shortid')

var db=require('../db.js')

module.exports.index=(req, res) => res.render('users/index.pug',{

    userList:db.get('users').value() 

})

module.exports.search=function(req, res){ 

    var val=req.query.nameQuery;

    var matchedArr=db.get('users').value().filter(function(user){

        return user.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;

    })

    res.render('users/index.pug',{

        userList:matchedArr

    })
    
}

module.exports.create=function(rep,res){

    res.render('users/create.pug');

}

module.exports.get= function(req, res){
    
    var idSearch=req.params.userId;

    var user=db.get('users').find({id: idSearch}).value();

    res.render('users/view',{
        userInfo: user       
    });
}

module.exports.postCreate=function(req,res){

    req.body.id=shortid.generate();

    req.body.avatar=req.file.path.split(/[\\/]/).slice(1).join('/')
    
    db.get('users').push(req.body).write();

    res.redirect('/users');
}