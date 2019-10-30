const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); //access img, css, js files in public folder

//route
app.get("/", function(req,res){
    // res.send(`<h1>it works!</h1>`);
    res.render("index.html");
});

app.get("/cplusplus", function(req,res){
    res.render("cplusplus.ejs");
});

app.get("/internet", function(req,res){
    res.render("internet.ejs");
});

app.get("/java", function(req,res){
    res.render("java.ejs");
});

//server listener
// app.listen("8080", "0.0.0.0", function(){
//     console.log("Express Server is Running...")
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...");
});