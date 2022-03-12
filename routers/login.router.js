const router = require('express').Router();
const controllerLogin = require('../controllers/login.controller.js');
const bodyParser = require('body-parser').urlencoded({
    extended: true
});

router.get('/LogIn', controllerLogin.getLogin);

router.post('/LogIn',bodyParser ,controllerLogin.postLogin);


module.exports = router;