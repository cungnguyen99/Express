const express = require('express')
const app = express()
const port = 3000

/**
 * Khi muốn lấy về một dòng html thì ta viết như ở dưới nhưng trên thực tế nó sẽ trả về cả 1 trang html nên không
 * thể viết như thế

 * app.get('/', (req, res) => res.send('<h1>Hello World! My name is Cung</h1><a href="/users"> Get users</a>'))

 * app.get('/users', (req, res) => res.send('List users: '))
 */

 var users=[
    {id: 1, name: 'Selena Gomez'},
    {id: 2, name: 'Anne Kedrick'}
 ]

//Khi muốn load cả 1 trang ta phải làm như này
app.set('view engine', 'pug');

app.set('views', './views');

//Truyền vào 2 biến 1 là tên file pug 2 là 1 obj, khi muốn lấy gtri của key, bên file pug ta sẽ ghi #{name}
app.get('/', (req, res) => res.render('index.pug',{name: 'Cung'}))

app.get('/users', (req, res) => res.render('users/index.pug',{

    userList:users

}))

app.get('/users/search',function(req, res){

    //lay ra value co key la name trong users. req.querry tra ve mot obj. req.query chấm đến tên gì cũng được 
    //nhưng phải giống với tên của thuộc tính name trong input ở file pug
    var val=req.query.nameQuery;

    //loc ra nhung ten trung voi q
    var matchedArr=users.filter(function(user){

        return user.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;

    })

    res.render('users/index.pug',{
        userList:matchedArr
    })
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))