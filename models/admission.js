const mongoose= require('mongoose')

const admissionSchema= new mongoose.Schema({
  first_name:{
    type:String,
    required:true
  },
  middle_name:{
    type:String,
    required:true,
    default:"DF"
  },
  last_name:{
    type:String,
    required:true
  }

})

module.exports=mongoose.model('Admission',admissionSchema)
