const mongoose = require('mongoose');

exports.URI_DB = 'mongodb+srv://<username>:<password>@cluster0.wpdgp.mongodb.net/TestApp?retryWrites=true&w=majority';

exports.user = mongoose.model('user', {
    First_Name: String,
    Last_Name: String,
    Email: String,
    Password: String,
    Photo_Profile: String
});

exports.post = mongoose.model('post', {
    USERID: String,
    FullName: String,
    Photo_Profile: String,
    TextPost: String,
    date: String,
    likes: Number,
    Unlikes: Number
})