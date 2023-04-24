const User = require("../models/user");
exports.get = function(req,res){
    User.find({}).then(rs=>{
        res.render("usersList",{
            items: rs
        });
    }).catch(err=>{
        res.send(err);
    });
}
exports.createForm = (req,res)=>{
    res.render("createUser");
};
exports.save = (req,res)=>{
    let s = req.body;
    let newUser = new User(s);
    newUser.save().then(rs=>{
        res.redirect("/user-list");
    }).catch(err=>{
        res.send(err);
    })
};