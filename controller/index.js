const Tweet = require("../model/tweet");
const User = require("../model/user");

const JWT = require("jsonwebtoken");

module.exports.entry = function (req, res){
    return res.render("entry")
}

module.exports.register = async function (req, res){
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            await User.create({
                username:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            return res.redirect("back");
        }
        console.log("User already registered")
        return res.redirect("back")
    }catch(err){
        console.log("Error while registering",err);
    }
}
module.exports.signInPage = function (req, res){
    return res.render("sign_in");
}
module.exports.home = async function (req, res){
    const tweets = await Tweet.find().sort({_id: 1}).limit(10).skip(0)
    return res.render("home",{
        tweets,
        value:10,
        name:req.query.name
    });
}
module.exports.createSession = async function(req,res){
    let user = await User.findOne({email:req.body.email});
    try{
        
        if(!user || user.password != req.body.password){
            return res.json(402,{
                message:"Invalid username or password"
            })
        }
        // token create but havent done any authorization process yet, due to less amount of assignment time
        let token = JWT.sign(user.toJSON(), "twittee", {expiresIn:"100000"});

        return res.redirect(`/authenticate/home?name=${user.username}`);
        
    }catch(err){
        console.log("Error",err);
        return req.json(500, {
            message:"Internal Server Error"
        });
    }
    
}