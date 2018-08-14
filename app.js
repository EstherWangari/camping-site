var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var campgrounds = [
  {name:"kare",title:"bad"},
  {name:"mike",title:"good"}
]

app.get("/", function(req,res){
  res.render("landing")
});
app.get("/campgrounds",function(req,res){

  res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds",function(req,res){
  var name = req.body.name;
  var title = req.body.title;
  var newCampGround = {name:name,title:title};
  campgrounds.push(newCampGround);
  res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req,res){
  res.render("new");
});



app.listen(3000,function(){
  console.log("server started");
});
