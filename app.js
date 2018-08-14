var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var campgrounds = [
  {name:"kare",image:"https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144291f1c67ea4ecbc_340.jpg"},
  {name:"mike",image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f4c07ea0eeb4b1_340.jpg"},
  {name:"lamar",image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144291f1c67ea4ecbc_340.jpg"},
  {name:"lamar",image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144291f1c67ea4ecbc_340.jpg"},
  {name:"lamar",image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144291f1c67ea4ecbc_340.jpg"},
  {name:"lamar",image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144291f1c67ea4ecbc_340.jpg"},
  {name:"lamar",image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144291f1c67ea4ecbc_340.jpg"},
  {name:"lamar",image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144291f1c67ea4ecbc_340.jpg"},
  {name:"lamar",image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144291f1c67ea4ecbc_340.jpg"}
]

app.get("/", function(req,res){
  res.render("landing")
});
app.get("/campgrounds",function(req,res){

  res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds",function(req,res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampGround = {name:name,image:image};
  campgrounds.push(newCampGround);
  res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req,res){
  res.render("new");
});



app.listen(3000,function(){
  console.log("server started");
});
