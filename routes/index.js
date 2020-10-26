const express=require('express')
const router = express.Router()
const mongoose=require('mongoose');
const Blogs=require('../models/schema')
const { ensureAuth,ensureGuest }=require('../middleware/auth2')
const {design}=require('./courses')

// load config
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'});

var arr1=new Array();//dummy
var arr2=new Array();//dummy
var arr3=new Array();
var vtopics=new Array();
var vlinks=new Array();
var vdescription=new Array();


router.get('/:id',ensureAuth,async (req,res)=>
{
    Blogs.findOne({coursename:req.params.id})
    .then(function(dott){
        if(!dott){
            console.log('no records')
            res.send('no records on database')
        }
        else{
    arr1=dott.links;
    arr2=dott.topics;
    arr3=dott.description;
    vtopics=[];
    vlinks=[];
    vdescription=[];
vlinks=arr1;
vtopics=arr2;
vdescription=arr3;
//
    const validd=true;
    const enroll=true;
    const name="sekhar"
    res.render('topics',{enroll:enroll,vtopics,vlinks,vdescription,validd:validd,displayname:req.user.displayname,
    profilepic:req.user.image,design:design(),
    })
    //console.log(req.users.displayname)
        }
    })
})


module.exports=router
