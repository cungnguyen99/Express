module.exports.validate=function(req, res, next){
    var err=[];

    if(!req.body.name){

        err.push('Name is no required')

    }

    if(!req.body.email){

        err.push('Url image is no required')
        
    }

    if(err.length){

        res.render('users/create.pug',{

            error:err,
            
            values: req.body

        })

        return;
    }

    //khi ma khong co loi thi se goi ham sau middleware
    next();
}