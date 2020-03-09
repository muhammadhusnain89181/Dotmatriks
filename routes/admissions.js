const express = require('express')
const router = express.Router()
const Admission = require('../models/admission')

//Getting All data
router.get('/', async(req,res) => {
  try {
    const admission = await Admission.find()
    res.json(admission)
  } catch (e) {
    res.status(500).json({message:e.message})
  }
})

//Getting one data
router.get('/:id',getAdmission , (req,res) =>{
  res.send(res.admission)
})
//Getting one data by Name
router.get('/name/:id',async (req,res) =>{
  try {
    const admission = await Admission.find({middle_name:req.params.id})
    res.json(admission)
  } catch (e) {
    res.status(500).json({message:e.message})
  }

})


//Saving a new Data
router.post('/', async(req,res)=>{
  const admission = new Admission({
    first_name:req.body.first_name,
    middle_name:req.body.middle_name,
    last_name:req.body.last_name 
  })
  try {
    const newadmission = await admission.save()
    res.status(201).json(newadmission)
  } catch (e) {
    res.status(500).json({message:e.message})
  }
})
//Updating a record
router.patch('/:id' , getAdmission, async(req,res)=>{
  if (req.body.middle_name!=null) {
    res.admission.middle_name=req.body.middle_name
  }
  if (req.body.last_name!=null) {
    res.admission.last_name=req.body.last_name
  }
  if (req.body.first_name!=null) {
    res.admission.first_name=req.body.first_name
  }
  try {
    const updatedadmission = await res.admission.save()
    res.json(updatedadmission)
  } catch (e) {
    res.status(500).json({message:e.message})
  }
})
//Deleting a record



async function getAdmission(req,res,next){
    let admission
    try {
      admission=await Admission.findById(req.params.id)
      if (admission==null){
        return res.status(404)
      }
    } catch (e) {
      return res.status(500).json({message:e.message})
    }
    res.admission=admission
    next()
}

module.exports = router
