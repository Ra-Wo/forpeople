const Profile = require('../models/profile.model.js');

exports.getProfile = (req, res)=>{
    res.redirect(`/profile/PI-${req.session.USER_ID}`);
}

exports.getProfileUser = (req, res)=>{
    
    let IDProfile = req.params.idUser.substr(3);
    
    Profile.getDataProfile(IDProfile)
    .then((All_Data)=>{

        if (req.session.USER_ID){
        var ifUser = true;
        }
        
        if ( req.session.USER_ID == IDProfile){
            var YNProfile = 'Profile';
        } else {
            var YNProfile = 'NProfile';
        }
        
        res.render('Profile.ejs',{
            First_Name: All_Data.USER_DATA.First_Name,
            Last_Name: All_Data.USER_DATA.Last_Name,
            Email: All_Data.USER_DATA.Email,
            Photo_Profile: All_Data.USER_DATA.Photo_Profile,
            user: ifUser,
            YNProfile: YNProfile,
            Title_Page: `ForPeople - ${All_Data.USER_DATA.First_Name} ${All_Data.USER_DATA.Last_Name}`,
            Posts: All_Data.Posts
        })
        
        
    })
    .catch((err)=>{
        
        
        res.send(err)
        
        
        
    })
}

exports.addPost = (req, res)=>{
    
    Profile.addPostToDatabase(req.body.Post, req.session.USER_ID).then((T)=>{
        
        res.redirect('/profile')
        
    }).catch((err)=>{
        
        res.send(err)
        
    })
    
}