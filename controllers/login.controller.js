const loginModel = require('../models/login.model.js')

exports.getLogin = (req, res)=>{
    res.render('LogIn.ejs', {
        resulty: undefined,
        resultx: undefined,
        Title_Page: 'ForPeople - Log in'
    })
}

exports.postLogin = (req, res)=>{
    if (req.body.remember == 'on') {
        req.session.cookie.maxAge = 365 * 24 * 60 * 60 * 1000;
    }
    
    loginModel(req.body)
    .then((resultY)=>{
        req.session.USER_ID = resultY;
        res.redirect('/');
    })
    .catch((resultx)=>{
        res.render('LogIn.ejs', {
            resultx,
            resulty: undefined,
            Title_Page: 'ForPeople - Log in'
        })
    })
}