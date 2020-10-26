const path=require('path')
const express=require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan =require('morgan');
const passport = require('passport')
const fs = require('fs');
const bodyparser=require('body-parser')
const session = require('express-session')
//const {ensureAuth,ensureGuest}=require('./middleware/auth')
const connectdb = require('./config/db');

var url=bodyparser.urlencoded({extended:false})
// load config
dotenv.config({path:'./config/config.env'});

// passport config
require('./config/passport')(passport)

connectdb();

const app=express();

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())






//static folders
app.use(express.static(path.join(__dirname,'public')))

// view engine
app.set('view engine', 'ejs');


//sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
     // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

  // passport middle ware
app.use(passport.initialize())
app.use(passport.session())

app.use('/courselist',require('./routes/index'));//
app.use('/auth',require('./routes/auth'));
 app.use('/coursetopic',require('./routes/courselist'));//
app.post('/search',function(req,res){
  console.log(req.body.search)
})//this is for search bar 
app.get('/enroll',(req,res)=>{
  console.log(`user enrolled to a ${req.user.coursename}`)
  res.redirect('back')//this is for enroll button
})
app.use('/',require('./routes/indexx'));//
app.listen(3000,'localhost')




