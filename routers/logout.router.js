const router = require('express').Router();

module.exports = router.get('/LogOut', (req, res)=>{
    req.session.destroy();
    res.redirect('/');
});