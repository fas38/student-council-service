var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // console.log('Time: ', Date.now())
  next()
})

//define routes

router.get('/who-we-are', function (req, res) {
  res.render('about/who_we_are');
})

router.get('/chairman', function (req, res) {
  res.render('about/chairman.ejs');
})

router.get('/testimonial', function (req, res) {
  res.render('about/testimonial.ejs');
})

router.get('/team', function (req, res) {
  res.render('about/team.ejs');
})

module.exports = router