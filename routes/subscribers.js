 const express = require('express')
const router= express.Router()
const Subscriber = require('../models/subscriber')

//Getting all
router.get('/', async(req, res) => {
  try {
    const subscriber = await Subscriber.find()
    res.json(subscriber)
  } catch (e) {
    res.status(500).json({message:e.message})
  }
})
//Getting once
router.get('/:id', getSubscriber,(req, res) => {
  res.send(res.subscriber)
})
//Creating once
router.post('/',async(req, res) => {
  const subscriber= new Subscriber({
    name:req.body.name,
    subscribedToChannel:req.body.subscribedToChannel,
  })
  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  } catch (e) {
    res.status(400).json({message:e.message})
  }
})
//Updating one
router.patch('/:id',getSubscriber, async(req, res) => {
  if (req.body.name != null){
   res.subscriber.name = req.body.name
  }
  if (req.body.subscribedToChannel != null){
   res.subscriber.subscribedToChannel = req.body.subscribedToChannel
  }
  try {
    const updatedSubscriber= await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (e) {
    res.status(400).json({message:e.message})
  }
})
//deleting one
router.delete('/:id',getSubscriber, async(req, res) => {
  try {
    await res.subscriber.remove()
    res.json({message:"Deleted Subscriber"})
  } catch (e) {
      res.status(500).json({message:e.message})
  }
})

async function getSubscriber(req,res,next){
    let subscriber
    try {
      subscriber=await Subscriber.findById(req.params.id)
      if (subscriber==null){
        return res.status(404)
      }
    } catch (e) {
      return res.status(500).json({message:e.message})
    }
    res.subscriber=subscriber
    next()
}

  module.exports = router
