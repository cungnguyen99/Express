var mongooes=require('mongoose')

//khai bao schema : khai bao nhung field co trong obj
var productSchema=new mongooes.Schema({
    name: String,
    image: String,
    description: String,
})

//luu userSchema vao database co ten la users
var Product = mongoose.model('Product', productSchema, 'products');

module.exports=Product