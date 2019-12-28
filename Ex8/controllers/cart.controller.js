var db=require('../db')

module.exports.addToCart=function(req, res, next){
    //chấm productId do ở cart.route khai la /add/:producId
    var productId=req.params.productId 

    var sessionId=req.signedCookies.sessionId

    //neu k co session id thi tro ve trang product
    if(!sessionId){
        res.redirect('/product')
        return
    }

    /**
     * lay ra so san pham ban dau cua mot product voi productid la id cua san pham, neu chua co san pham nao
     * thi mac dinh ban dau la 0
     */
    var count=db.get('session')
                .find({id: sessionId})
                .get('cart.'+productId, 0)
                .value()
     
    /**
     * update lai so san pham cua mot product voi productid la id cua san pham, count se cong them 1 moi khi
     * nguoi dung an them add cart
     */
    db.get('session')
        .find({id: sessionId})
        .set('cart.'+productId,count+1)
        .write()

    var countCart=db.get("sessions").find({ id: sessionId }).get("cart").size().value()

    // res.locals.countCart = countCart;

    res.redirect('/product')

}