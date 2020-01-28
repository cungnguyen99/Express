var mongoose=require('mongoose')

var sissionSchema=new mongoose.Schema({
    cart: Object
})

var Session = mongoose.model('Session', sissionSchema, 'session');

module.exports=Session