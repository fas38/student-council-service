var express = require('express')
const userModel = require('../model/user')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    // console.log('Time: ', Date.now())
    next()
})

//define CRUD routes

router.get('/user', async (req, res) => {
    const users = await userModel.find({});

    try {
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.post('/user', async (req, res) => {
    const user = new userModel(req.body);

    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.delete('/user/:id', async (req, res) => {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id)
  
      if (!user) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
})

router.patch('/user/:id', async (req, res) => {
    
    try {
      const user = await userModel.findByIdAndUpdate(req.params.id, req.body)
      if (!user) res.status(404).send("No item found for updating")
      await user.save()
      res.send(user)
    } catch (err) {
      res.status(500).send(err)
    }
})

module.exports = router