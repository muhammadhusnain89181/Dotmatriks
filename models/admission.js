const mongoose= require('mongoose')

const admissionSchema= new mongoose.Schema({
  first_name:{    type:String,    required:true  },
  middle_name:{ type:String,    required:true, },
  last_name:{    type:String,    required:true  },
  father_name:{    type:String,    required:true  },
  ident_mark:{    type:String,    required:true,  },
  gender:{    type:String,    required:true  },
  dob:{type:String, required:true},
  age:{type:String, required:true},
  place_of_birth:{type:String, required:true},
  nationality:{    type:String,    required:true,  },
  cnic:{    type:String,    required:true  },
  contact:{type:String, required:true},  
  landline_contact:{    type:String,    required:true,  },
  present_add:{    type:String,    required:true  },
  permanent_add:{type:String, required:true},
  mailing:{type:String, required:true},
  email:{    type:String,    required:true,  },
  is_on_camp:{    type:String,    required:true  },
  domicile:{type:String, required:true},
  religion:{type:String, required:true},
  s1_name:{    type:String,    required:false,  },
  s1_age:{    type:String,    required:false,  },
  s1_institute:{    type:String,    required:false,  },
  s1_grade:{    type:String,    required:false,  },
  s2_name:{    type:String,    required:false,  },
  s2_age:{    type:String,    required:false,  },
  s2_institute:{    type:String,    required:false,  },
  s2_grade:{    type:String,    required:false,  },
  g_name:{    type:String,    required:true,  },
  g_relation:{    type:String,    required:true  },
  g_contact:{type:String, required:true},
  g_email:{type:String, required:true},
  g_offic_contact:{    type:String,    required:true,  },
  g_designation:{    type:String,    required:true,  default:"Phy-Math-Comp Science"},
  g_profession:{type:String, required:true},
  g_annual_incom:{type:String, required:true},
  urgent_name:{    type:String,    required:true,  },
  urgent_relation:{    type:String,    required:true  },
  urgent_cnic:{type:String, required:true},
  urgent_contact:{type:String, required:true},
  school_name:{type:String, required:true},
  school_location:{    type:String,    required:true,  },
  school_certificate:{    type:String,    required:true  },
  school_board:{type:String, required:true},
  subjects:{type:String, required:true},
  ssc_1_marks:{    type:String,    required:true,  },
  ssc_2_marks:{    type:String,    required:true,  },  
  subject:{    type:String,    required:true,  },
  ice_sub:{    type:String,    required:true,  default:"Phy-Math-Comp Science"},
  form_b:{type:String, required:true},
  matric_marksheet:{type:String, required:true},
  father_cnic:{type:String, required:true},
  nine_mark_sheet:{    type:String,    required:true,  },
  leaving_certificate:{    type:String,    required:true,},
  char_certificate:{type:String, required:true},
})

module.exports=mongoose.model('Admission',admissionSchema)
