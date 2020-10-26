const express = require('express')
const router = express.Router()
const { ensureAuth,ensureGuest }=require('../middleware/auth')
const {design} = require('./courses')

var design2=["photoshop","fusion360","wordpress","ux/ui","autodesk"];
var filmmaking=["Photography","Videography","Cinematography","Premier Pro","Lightroom cc","Direction","Music Composition"];
var development=["Python","Flutter","Java","Javascript","Angular","Nodejs","Mysql","Web Development","c/c++","Aws","React Native","Php"];
var marketing=["Digital Marketing","Affliate Marketing","Product Marketing","Socialmedia Marketing","Youtube Marketing","Adwords","Event Planning"];
var itandsoftware=["Cyber Security","Network Security","Ethical Hacking","Aws Courses","Arduino","Embedded Systems","Plc","Raspberry pi","Rtos"];
var personaldevelopment=["Carrer Development","Stress Management","Leadership","Public speaking","Communication Skills","Productivity"];
var technology=["Artificial intelligence","Machine learning","Deep learning","IoT","Block chain","Cyber security"];
var business=["entrepreneurship","product management","Risk management","sales skills","Startup","Business Laws","Leadership"];
var coursetopics=new Array();
var maintopics=new Array();
maintopics=["design","filmmaking","development","marketing","itandsoftware","prosonaldevelopment","technology","business"]

router.get('/:id',async (req,res)=>{
console.log(req.params.id)
if(req.params.id=="design"){
    coursetopics=design();
}
if(req.params.id=="filmmaking"){
    coursetopics=filmmaking;
}
if(req.params.id=="development"){
    coursetopics=development;
}
if(req.params.id=="marketing"){
    coursetopics=marketing;
}
if(req.params.id=="itandsoftware"){
    coursetopics=itandsoftware;
}
if(req.params.id=="personaldevelopment"){
    coursetopics=personaldevelopment;
}
if(req.params.id=="technology"){
    coursetopics=technology;
}
else if(req.params.id=="business"){
    coursetopics=business;
}

var validd=false;
res.render('coursetopics',{coursetopics:coursetopics,validd:validd,design:design()
})
})
module.exports=router