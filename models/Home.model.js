const mongoose = require('mongoose');
const path = require('path');
const Info = require(path.join(__dirname, '..', 'config.js'))

let user = Info.user;
let Post = Info.post;

exports.getUser = (USER_ID)=>{
    return new Promise((resolve, reject)=>{
        mongoose.connect(Info.URI_DB, {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
            
            user.findOne({_id: USER_ID}).then((result)=>{
                
                Post.find({}).then((Posts)=>{
                    if(result){
                        var All = {
                            USER_DATA: result,
                            Posts: Posts
                        };
                        resolve(All)
                    } else {
                        var All = {
                            USER_DATA: 'NoUser',
                            Posts: Posts
                        };
                        resolve(All)
                    }
                })
                
            })
            
        })
    })
};