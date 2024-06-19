const mongoose=require("mongoose");
mongoose.connect(
  'mongodb+srv://mechonsakthi44:f6MJbMOlEBfjrE50@cluster0.0uqjmor.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', console.error.bind('console', 'error'));

db.once('open', function () {
  console.log('welcome connect to database');
});

module.exports = db;





// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1/Twittee");

// const db = mongoose.connection;

// db.on("error",console.error.bind(console,"Error in connecting to DB"));

// db.once("open", () => {
//     console.log("Connected to MongoDB :)")
// })

// module.exports = db;
