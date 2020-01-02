var mongooes=require('mongoose')

//khai bao schema : khai bao nhung field co trong obj
var userSchema=new mongooes.Schema({
    name: String,
    phone: String,
    avatar: String,
    email: String,
    password: String
})

//luu userSchema vao database co ten la users
var User = mongoose.model('User', userSchema, 'users');

module.exports=User