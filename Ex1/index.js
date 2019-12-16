const express = require('express')
const bodyParser=require('body-parser')
const app = express()
const port = 3000
//Khai bao bien de su dung cho lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)


/**
 * Khi muốn lấy về một dòng html thì ta viết như ở dưới nhưng trên thực tế nó sẽ trả về cả 1 trang html nên không
 * thể viết như thế

 * app.get('/', (req, res) => res.send('<h1>Hello World! My name is Cung</h1><a href="/users"> Get users</a>'))

 * app.get('/users', (req, res) => res.send('List users: '))
 */

/*
 var users=[
    {id: 1, name: 'Selena Gomez'},
    {id: 2, name: 'Anne Kedrick'}
 ]
*/

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write()

//Khi muốn load cả 1 trang ta phải làm như này
app.set('view engine', 'pug');

app.set('views', './views');

//khai bao de su dung req.body o bai 4
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

//Truyền vào 2 biến 1 là tên file pug 2 là 1 obj, khi muốn lấy gtri của key, bên file pug ta sẽ ghi #{name}
app.get('/', (req, res) => res.render('index.pug',{name: 'Cung'}))

app.get('/users', (req, res) => res.render('users/index.pug',{
//db.get('users').value() lay ra cac gia tri co trong users thay cho userList:users ta khai 
//bao mac dinh mot mang users luc dau
    userList:db.get('users').value() 

}))

app.get('/users/search',function(req, res){ 

    //lay ra value co key la name trong users. req.querry tra ve mot obj. req.query chấm đến tên gì cũng được 
    //nhưng phải giống với tên của thuộc tính name trong input ở file pug
    var val=req.query.nameQuery;

    var age=req.query.ageQuery;

    //loc ra nhung ten trung voi q
    var matchedArr=db.get('users').value().filter(function(user){

        return user.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;

    })

    res.render('users/index.pug',{
        userList:matchedArr
    })
    
})

app.get('/users/create',function(rep,res){

    res.render('users/create.pug');

})

app.get('/users/:userId', function(req, res){
    
    //:userId la mot parameter. phan do khi nhan vao no se thay bang id o trong find find({id: idSearch})
    var idSearch=req.params.userId;

    var user=db.get('users').find({id: idSearch}).value();

    console.log(user);
    res.render('users/view',{
        userInfor: user       
    });
})

app.post('/users/create',function(req,res){

    //tra ve gia tri ma ta gui len server khi ta nhap o input theo kieu obj voi key la ten 
    //cua thuoc tinh name o input va value la gia tri cua input
    db.get('users').push(req.body).write();//.wirte de luu vao file db.json

    //sau khi gui xong dua nguoi dung quay tro ve trang users sẽ hiện ra tất cả users kể cả user vừa tạo do
    //khi quay trở về trang users nó sẽ thực hiện lại hàm get ở dòng 34 rồi render lại
    res.redirect('/users');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))