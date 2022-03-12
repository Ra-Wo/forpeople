const HomeData = require('../models/Home.model.js')

module.exports = (req, res)=>{
    
    HomeData.getUser(req.session.USER_ID).then((All_DATA)=>{
            
        if (req.session.USER_ID){
            var ifUser = true;
            
                res.render('Home.ejs', {
                    user: ifUser,
                    firstName: All_DATA.USER_DATA.First_Name,
                    Title_Page: 'ForPeople - Home',
                    Posts: All_DATA.Posts
                })
            
        } else {
            var ifUser = false
            res.render('Home.ejs', {
                user: ifUser,
                firstName: 'NoUser',
                Title_Page: 'ForPeople - Home',
                Posts: All_DATA.Posts
            })
        }
    })
}