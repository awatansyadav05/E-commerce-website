const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true,
  },
  email:{
    type: String,
    unique:true,
  },
  // role:{
  //   type:Number,
  //   required:0,
  // },
  cart:{
    type:Array,
    default:[]
  },


},{
  timestamps:true
})
module.exports= mongoose.model('Users', userSchema)