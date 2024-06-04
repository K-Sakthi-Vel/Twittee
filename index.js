const express = require("express");

const port = 5000;

const bodyParser = require("body-parser");

const passportJWT = require("./config/passport_jwt");

const sassMiddleware = require("node-sass-middleware");

const db = require("./config/mongoose");

const app = express();

app.use(sassMiddleware({
    src:"/assets/scss",
    dest:"/assets/css",
    debug:true,
    outputStyle:"extended",
    prefix:"/assets/css/"
}));

app.use(bodyParser.json());

app.use(express.urlencoded());

app.set("views", "./views");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "assets"));

app.use("/assets", express.static(__dirname + "/assets"));

app.use("/",require("./routes"));


app.listen(port, (err) => {
    if(err){
        console.log("Error in running server");
    
        return;
    }
    console.log("Server is running successfully on port",port);
});