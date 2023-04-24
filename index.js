const express = require("express");
// connect mongodb
require("dotenv").config();
const database = require("./src/database");
const app = express();
const User = require ("./src/models/user");

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server is running...");
})
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", function (req,res){
    res.render("home",);
});

app.get("/user-list", (req,res) => {
    User.find({}).then(rs=>{
        res.render("usersList",{
            item: rs
        });
    }).catch(err=>{
        res.send(err);
    });
})

app.get("/createUser", function (req,res){
    const  Student = require("./src/models/user");
    Student.find({}).then(rs=>{

        res.render("createUser",{
            items: rs
        });

    }).catch(err=>{
        res.send(err);
    });
});

