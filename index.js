const express = require("express");
// connect mongodb
require("dotenv").config();
const database = require("./src/database");
const app = express();


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server is running...");
})
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", function (req,res){
    let student = {
        name : "Quang Truong",
        age: 24
    };
    let classRoom = {
        name: "T2203E",
        room: "B14"
    }
    res.render("createUser",{
        student: student,
        classRoom: classRoom
    });
});

