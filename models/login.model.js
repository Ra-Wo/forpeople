const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const Info = require(path.join(__dirname, '..', 'config.js'))

let user = Info.user;

module.exports = (loginDATA)=>{
    return new Promise((resolve, reject)=>{
        
        mongoose.connect(Info.URI_DB, {useNewUrlParser: true, useUnifiedTopology: true }).then((err)=>{
            
            user.findOne({ Email: loginDATA.Email }).then((result)=>{
                
                if (result){
                    
                    
                    bcrypt.compare(loginDATA.Password, result.Password)
                        .then((pass)=>{
                        
                            if(pass) {
                                resolve(result._id)
                            } else {
                                reject('Password is incorrect')
                            }
                        
                    })
                    
                    
                } else {
                    reject('There is no user with that email')
                }
                
            })
            
        })
        
    })
}