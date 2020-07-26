var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // console.log('Time: ', Date.now())
  next()
})

//define routes

router.get('/quebec-investor', function (req, res) {
  res.render('program/quebec-investor-assesment');
})

router.get('/portugal-passport', function (req, res) {
  res.render('program/portugal-passport-assesment');
})

router.get('/express-entry', function (req, res) {
  res.render('program/express-entry-assesment');
})

router.get('/provincial-nominee-program', function (req, res) {
  res.render('program/provincial-nominee-program-assovincial');
})

router.get('/usa-investor-program', function (req, res) {
    res.render('program/usa-investor-program-assesment');
})

router.get('/antigua-barbuda', function (req, res) {
  res.render('program/antigua-barbuda-assesment');
})

router.get('/student-visa', function (req, res) {
  res.render('program/student-visa-assesment');
})

router.get('/temporary-residence-visa', function (req, res) {
  res.render('program/temporary-residence-visa-assesorary');
})

router.get('/super-visa', function (req, res) {
    res.render('program/super-visa-assesment');
})

module.exports = router