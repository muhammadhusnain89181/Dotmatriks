const express = require('express')
const router = express.Router()
const Admission = require('../models/admission')

// router.get('/',async(reeq,res)=>{
//   alert('Hello World')
// })
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
    last_name:req.body.last_name,
    father_name:req.body.father_name,
    ident_mark:req.body.ident_mark,
    gender:req.body.gender,
    dob:req.body.dob,
    age:req.body.age,
    place_of_birth:req.body.place_of_birth,
    nationality:req.body.nationality,
    cnic:req.body.cnic,
    contact:req.body.docontactb,  
    landline_contact:req.body.landline_contact,
    present_add:req.body.present_add,
    permanent_add:req.body.permanent_add,
    mailing:req.body.mailing,
    email:req.body.email,
    is_on_camp:req.body.is_on_camp,
    domicile:req.body.domicile,
    religion:req.body.religion,  
    s1_name:req.body.s1_name,
    s1_age:req.body.s1_age,
    s1_institute:req.body.s1_institute,
    s1_grade:req.body.s1_grade,
    s2_name:req.body.s2_name,
    s2_age:req.body.s2_age,
    s2_institute:req.body.s2_institute,
    s2_grade:req.body.s2_grade,
    g_name:req.body.g_name,
    g_relation:req.body.g_relation,
    g_contact:req.body.g_contact,
    g_email:req.body.g_email,
    g_offic_contact:req.body.g_offic_contact,
    g_designation:req.body.g_profession,
    g_profession:req.body.g_profession,
    g_annual_incom:req.body.g_annual_incom,
    urgent_name:req.body.urgent_name,
    urgent_relation:req.body.urgent_relation,
    urgent_cnic:req.body.urgent_cnic,
    urgent_contact:req.body.urgent_contact,
    school_name:req.body.school_name,
    school_location:req.school_location,
    school_certificate:req.body.school_certificate,
    school_board:req.body.school_board,
    subjects:req.body.subjects,
    ssc_1_marks:req.body.ssc_1_marks,
    ssc_2_marks:req.body.ssc_2_marks, 
    subject:req.body.subjects,
    ice_sub:req.body.ice_sub,
    form_b:req.body.form_b,
    matric_marksheet:req.body.matric_marksheet,
    father_cnic:req.body.father_cnic,
    nine_mark_sheet:req.body.nine_mark_sheet,
    leaving_certificate:req.body.leaving_certificate,
    char_certificate:req.body.char_certificate,
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
