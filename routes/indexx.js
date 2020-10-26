const express = require('express')
const router = express.Router()
const {design} = require('./courses')
const { ensureAuth,ensureGuest }=require('../middleware/auth')
const pleasee=false;
// load config
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'});
var validd
router.get('/:id',ensureAuth,async (req,res)=>

{
    validd=true
res.render(req.params.id,{
    validd:validd,
    displayname:req.user.displayname,
    profilepic:req.user.image,
    design:design(),
}
);
console.log(req.user.displayname)
console.log(design())
})

module.exports=router
