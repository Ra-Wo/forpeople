const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const Info = require(path.join(__dirname, '..', 'config.js'))


let user = Info.user;


exports.AddNewUser = (DataUser)=> {
    return new Promise((resolve, reject)=> {

        mongoose.connect(Info.URI_DB, {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
            
            user.findOne({Email: DataUser.Email}).then((result)=>{
                
                if (DataUser.Email == '') {
                    reject('Email is missing')
                }
                else if (DataUser.Password == '') {
                    reject('Password is missing')
                } else if (DataUser.First_Name == '') {
                    reject('First name is missing')
                } else if (DataUser.Last_Name == '') {
                    reject('Last name is missing')
                } else if(result) {
                    
                    reject('Email is already used')
                    
                } else {
                    bcrypt.hash(DataUser.Password, 10).then((pass)=>{
                        
                        let newUser = new user({
                            First_Name: DataUser.First_Name,
                            Last_Name: DataUser.Last_Name,
                            Email: DataUser.Email,
                            Password: pass,
                            Photo_Profile: 'avatar.jpg'
                        })
                        
                        newUser.save().then(()=>{
                            resolve('you are calificay')
                        })
                        
                    })
                }
            })
        })
    })
}

/* 


*/