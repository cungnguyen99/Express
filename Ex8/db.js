const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ users: []})
  .write()
//tao ra json session de su dung cho bai 22 luu nhung cookie khi vao trang web
db.defaults({ session: []})
  .write()

module.exports=db
