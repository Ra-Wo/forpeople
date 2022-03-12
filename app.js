const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const bcrypt = require('bcryptjs')
const mongodbSession = require('connect-mongodb-session')(session);
const Info = require(path.join(__dirname, 'config.js'))

app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'images')))


const store = new mongodbSession({
    uri: Info.URI_DB,
    collection: 'session'
});

app.use(session({ secret: 'Do Your Best', cookie: {maxAge: 3600000 }, resave: false,
  saveUninitialized: false, store: store}))


app.use(require('./routers/profile.router.js'));
app.use(require('./routers/signup.router.js'));
app.use(require('./routers/home.router.js'));
app.use(require('./routers/login.router.js'));
app.use(require('./routers/logout.router.js'));

app.get('/:id', (req, res)=>{
    res.send(`404 not found page : ${req.params.id}`)
})


app.listen( process.env.PORT || 3000, (err)=>{
    console.log('\n {==== Server Is Running... ====}')
});