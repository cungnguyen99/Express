var mongoose=require('mongoose')

//khai bao schema : khai bao nhung field co trong obj
var productSchema=new mongoose.Schema({
    name: String,
    genre: String,
    country: String,    
    time: String,
    cast: String,
    imdb: String,
    manufacture_year: String,
    image:[String] ,
    description: String,
})

//luu userSchema vao database co ten la users
var Product = mongoose.model('Product', productSchema, 'products');

module.exports=Product