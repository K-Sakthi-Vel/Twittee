const Tweet = require("../model/tweet");

module.exports.addTweet = async function (req, res){
    await Tweet.create({
        tweet:req.body.tweet,
        username:req.body.username
    })
    return res.redirect("back");
}
module.exports.next = async function (req, res){
    const length = (await Tweet.find()).length;
    const value = Number(req.query.val) + 10
    if(value<=length){
        const tweets = await Tweet.find().sort({_id: 1}).limit(10).skip(value);
        return res.render("home",{
            name:req.query.username,
            tweets,
            value:value
        });
    }
    return res.redirect("back")
}
module.exports.previous = async function (req, res){
    const value = Number(req.query.val) - 10
    if (value >= 0){
        const tweets = await Tweet.find().sort({_id: 1}).limit(10).skip(value);
        return res.render("home",{
            name:req.query.username,
            tweets,
            value:value,

        });
    }
    return res.redirect("back")
}
    