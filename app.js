var express = require("express");
var app = express();
app.set("view engine","ejs");


app.get("/", function(req,res){
  res.render("landing")
});
app.get("/campgrounds",function(req,res){
  var campgrounds = [
    {name:"kare",title:"bad"},
    {name:"mike",title:"good"}
  ]
  res.render("campgrounds",{campgrounds:campgrounds});
});



app.listen(3000,function(){
  console.log("server started");
});
