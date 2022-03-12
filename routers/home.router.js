const router = require('express').Router();
const HomeControlle = require('../controllers/Home.controller.js');


router.get('/', HomeControlle);

module.exports = router