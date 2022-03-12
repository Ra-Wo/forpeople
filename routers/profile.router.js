const router = require('express').Router();
const controllerProfile = require('../controllers/profile.controller.js');
const bodyParser = require('body-parser').urlencoded({
    extended: true
});


router.get('/profile', controllerProfile.getProfile);

router.get('/profile/:idUser', controllerProfile.getProfileUser)

router.post('/profile', bodyParser, controllerProfile.addPost)


module.exports = router;