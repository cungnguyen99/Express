var db = require('../db.js')

var md5 = require('md5')

var User = require('../models/users.model')

module.exports.login = function (req, res) {

    res.render('auth/authLogin')

}

module.exports.postLogin = async function (req, res) {

    try {

        //req.body.Ten-gi-do thi Ten-gi-do phai trung voi ten cua thuoc tinh name trong input
        var email= req.body.emailLogin

        var pass=req.body.passLogin

        const user = await User.findOne({email})

        // User.findOne({ email: emailLogin }, (err, user) => {

            if (!user) {

                res.render('auth/authLogin', {

                    error: ['User dose not exists.'],

                    values: req.body

                })

                return;

            }

            if (user.password !== md5(pass)) {

                res.render('auth/authLogin', {

                    error: ['Wrong password.'],

                    values: req.body

                })

                return;

            }

            //Khi nhan login se tao ra 1 cookie voi id la idUser, iduser nay dung trong file auth.middleware 
            //de ktra xem co cookie hay chua. neu co roi thi cookie se co o tren trang web luon va dung duoc luon de ktra
            res.cookie('idUser', user.id, {

                signed: true

            })

            res.redirect('/product/create')

        // });
    } catch (error) {
        console.log(error)
    }

}