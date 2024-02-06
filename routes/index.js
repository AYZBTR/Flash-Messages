var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('index');
});

//creating flash message
router.get('/failed', function(req, res){
  req.flash("age", 21);
  req.flash("name", "Aayush Bhattarai");
  res.send("Baneyooo")
});

router.get('/check', function(req, res){
  //printing data of flash which we created before
  console.log(req.flash("age"), req.flash("name")); 
  res.send("Do check backend Terminal")
});

module.exports = router;
