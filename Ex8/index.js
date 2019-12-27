require('dotenv').config();
console.log(process.env.MyDarling)
const express = require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const app = express()
const port = 3000
var userRoute=require('./routes/users.route')
var authRoute=require('./routes/auth.route')
var productRoute=require('./routes/product.route')
var sessionMiddleware=require('./middleware/session.middleware')

app.set('view engine', 'pug');

app.set('views', './views');

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser(process.env.MyDarling))

//khai bao nhu nay de no se tao ra mot cookie o moi duong dan
app.use(sessionMiddleware)

app.use(express.static('public'))

app.get('/', (req, res) => res.render('index.pug',{name: 'Cung'}))

app.use('/users', userRoute);

app.use('/auth', authRoute);

app.use('/product', productRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))