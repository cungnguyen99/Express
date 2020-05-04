require('dotenv').config();
console.log(process.env.MyDarling);
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//khai bao csrf de su dung token cho chuyen tien bai 23
var csurf = require('csurf');

//khai bao va mo mot cong ket noi den database ma ta muon lam viec
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true } )

const app = express()
const port = 3000;
var userRoute = require('./routes/users.route')
var authRoute = require('./routes/auth.route')
var transferRoute = require('./routes/transfer.route')
var productRoute = require('./routes/product.route')
var cartRoute = require('./routes/cart.route')
var sessionMiddleware = require('./middleware/session.middleware')
var apiRoute = require('./api/route/products.route')

var Product = require('./models/products.model')

app.set('view engine', 'pug');

app.set('views', './views');

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser(process.env.MyDarling))

//khai bao nhu nay de no se tao ra mot cookie o moi duong dan
app.use(sessionMiddleware)

//su dung csrf
// app.use(csurf({ cookie: true }))

app.use(express.static('public'));

app.get('/', async(req, res) =>{
    const films=await Product.find({ genre: 'Action' });
    const showTV=await Product.find({ genre: 'TV Show' });
    const popularCategories=await Product.find({ genre: 'Popular Categories' });
    res.render('index.pug', {
        showTV: showTV,
        films: films,
        popularCategories: popularCategories
    })
})

app.use('/users', userRoute);

app.use('/auth', authRoute);

app.use('/transfer', transferRoute);

app.use('/product', productRoute);

app.use('/cart', cartRoute)

//phai de sau bodyParser de khi req.body se co du lieu
app.use('/api/products/', apiRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))