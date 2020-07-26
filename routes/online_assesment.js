var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // console.log('Time: ', Date.now())
  next()
})

//define routes

router.get('/quebec-investor-assesment', function (req, res) {
  res.render('assesment/quebec-investor-assesment');
})

router.get('/portugal-passport-assesment', function (req, res) {
  res.render('assesment/portugal-passport-assesment');
})

router.get('/express-entry-assesment', function (req, res) {
  res.render('assesment/express-entry-assesment');
})

router.get('/provincial-nominee-program-assesment', function (req, res) {
  res.render('assesment/provincial-nominee-program-assovincial');
})

router.get('/usa-investor-program-assesment', function (req, res) {
    res.render('assesment/usa-investor-program-assesment');
})

router.get('/antigua-barbuda-assesment', function (req, res) {
  res.render('assesment/antigua-barbuda-assesment');
})

router.get('/student-visa-assesment', function (req, res) {
  res.render('assesment/student-visa-assesment');
})

router.get('/temporary-residence-visa-assesment', function (req, res) {
  res.render('assesment/temporary-residence-visa-assesorary');
})

router.get('/super-visa-assesment', function (req, res) {
    res.render('assesment/super-visa-assesment');
})

module.exports = router