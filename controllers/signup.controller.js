exports.getSignUp = (req, res)=>{
    res.render('SignUp.ejs', {
        resultx: undefined,
        Title_Page: `ForPeople - Sign up`
    })
}

const SignUpModel = require('../models/signup.model.js')

exports.postSignUp = (req, res)=>{
    SignUpModel.AddNewUser(req.body)
    .then((resulty)=>{
        res.render('LogIn.ejs', {
            resulty,
            resultx : undefined,
            Title_Page: `ForPeople - Log in`
        })
        
    })
    .catch((resultx)=>{
        
        res.render('SignUp.ejs', {
            resultx,
            Title_Page: `ForPeople - Sign up`
        })
        
    })
}