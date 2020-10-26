const passport = require("passport")
const {design} = require('../routes/courses')

// load config
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'});

module.exports ={
    ensureAuth: function (req,res,next){
        if(req.isAuthenticated()){
            console.log('authenticatedd')
            return next()
        }
        else{
            console.log('unauthenicated')
            const validd=false;
           res.render(req.params.id,{
               validd:validd,design:design(),
           })
          
        }
    },
    ensureGuest:function(req,res,next){
        if(!req.isAuthenticated()){
            return next()
            
        }
        else
        {
            console.log('guest authenticated')
            res.redirect('/index')
           
        }
    },
}