//File nay dung de khi ta vao bat ky link nao no cung tao ra 1 cookies ma k can dang nhap va dung cookie do de
//de them vao gio hang

var shortid=require('shortid')

var db=require('../db')

module.exports=function(req, res, next){

    /**
     * -Ban dau sessionId nay chua co nen no se thuc hien cau lenh o dong 13 la ktra !req.signedCookies.sessionId
     * la dung nen se tao ra mot cookie moi khi ta vua vao trang web. nhung sau do do co sessionId
     * roi nen khi ta load lai trang hay vao mot duong dan khac trong trang web no lai vao ham nay de 
     * ktra xem co chua nhung do co r (co khi ta vua vao trang web lan dau no ktra chua co va tao r) nen
     * khi load lai hay vao 1 duong dan khac trong link no k tao nua va sd sessionId do luon
     * sessionId 
     * -neu khong co cookies nao thi tao ra mot cookies moi voi ten la chuoi string bat ky
     */

    if(!req.signedCookies.sessionId){

        var sessionId=shortid.generate()

        res.cookie('sessionId',sessionId,{

            signed: true

        });

        //them mot obj co ten la id va gia tri la sesionId
        db.get('session').push({id: sessionId}).write()
    }

    next();
}