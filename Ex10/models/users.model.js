var mongoose=require('mongoose')

//khai bao schema : khai bao nhung field co trong obj
var userSchema=new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String
})

//luu userSchema vao database co ten la users
var User = mongoose.model('User', userSchema, 'users');

module.exports=User