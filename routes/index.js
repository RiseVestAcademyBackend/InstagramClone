var express = require('express');
var router = express.Router();
const mongoose  = require("mongoose")



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test", (req,res,next) => {
    
  mongoose.set("strictQuery", true) // not part of schema should not be queried

  const mongoDB_URI = `mongodb+srv://risers:${process.env.PASSWORD}@cluster0.jf4g8cq.mongodb.net`


  mongoose.connect(mongoDB_URI)

  mongoose.connection.on("connected", () => {
      console.log("connected to Tiffany")
  })

  mongoose.connection.on("error", () => {
      console.log("error connecting to Tiffany")
  })

  res.render('index', { title: 'Test Connection' });
})



module.exports = router;
