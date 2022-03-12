const router = require('express').Router();
const bodyParser = require('body-parser').urlencoded({
    extended: true
});

const SignUpController = require('../controllers/signup.controller.js');


router.get('/SignUp', SignUpController.getSignUp)

router.post('/SignUp', bodyParser, SignUpController.postSignUp)

module.exports = router;
