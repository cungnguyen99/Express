var express = require('express')
var router = express.Router(); 
const shortid=require('shortid')
var db=require('../db.js')

router.get('/', (req, res) => res.render('users/index.pug',{

    userList:db.get('users').value() 

}))

router.get('/search',function(req, res){ 

    var val=req.query.nameQuery;

    var matchedArr=db.get('users').value().filter(function(user){

        return user.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;

    })

    res.render('users/index.pug',{
        userList:matchedArr
    })
    
})

router.get('/create',function(rep,res){

    res.render('users/create.pug');

})

router.get('/:userId', function(req, res){
    
    var idSearch=req.params.userId;

    var user=db.get('users').find({id: idSearch}).value();

    res.render('users/view',{
        userInfo: user       
    });
})

router.post('/create',function(req,res){

    req.body.id=shortid.generate();

    db.get('users').push(req.body).write();

    res.redirect('/users');
})

module.exports=router