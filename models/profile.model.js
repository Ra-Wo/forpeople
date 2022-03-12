const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const Info = require(path.join(__dirname, '..', 'config.js'))


let user = Info.user;
let post = Info.post;


exports.getDataProfile = (IDProfile)=>{
    return new Promise((resolve, reject)=>{
        
        mongoose.connect(Info.URI_DB, {useNewUrlParser: true, useUnifiedTopology: true }).then((err)=>{
            
            user.findOne({_id : IDProfile})
            .then((result)=>{
                
                
                post.find({USERID: IDProfile}).then((Posts)=>{
                    var AllData = {USER_DATA: result, Posts: Posts}
                    resolve(AllData)
                })
                
                
            })
            .catch((err)=>{
                reject('There is no User')
            })
        })
        
    })
}

exports.addPostToDatabase = (UserPost, USER_ID)=>{
    
    return new Promise((resolve, reject)=>{
        mongoose.connect(Info.URI_DB, {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
            user.findOne({_id: USER_ID}).then((USERDATA)=>{
                
                let PostDate = new Date();
                
                let Post = new post({
                    USERID: USER_ID,
                    FullName: `${USERDATA.First_Name} ${USERDATA.Last_Name}`,
                    Photo_Profile: USERDATA.Photo_Profile,
                    date: `${PostDate.getFullYear()}-${PostDate.getMonth()}-${PostDate.getDate()}`,
                    TextPost: UserPost,
                    likes: 0,
                    Unlikes: 0
                })
                
                Post.save()
                    .then(()=>{
                        resolve(true)
                    })
                    .catch((err)=>{
                        reject(err)
                    })
            })
        })
        
    })
}