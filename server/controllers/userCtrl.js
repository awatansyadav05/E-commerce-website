const Users= require('../models/userModel')
const bcrypt=require ('bcrypt')

const userCtrl={
  register: async(req,res)=> {
    try{
        console.log(req.body)
        const { name,email,password } =req.body;
        const user=await Users.findOne({email})
   
        if(user) return res.status(400).json({msg:"Email is already registered"})
        if(password.length < 6 )
        return res.status(400).json({msg:"password is at least 6 charcter"})
        const newUser=new Users({
          name,email,password
        })
        //save mongodb

        await newUser.save()
        res.json({msg:"Register success!! "})
    }
    catch (err){
      console.log(err)
      return res.status(500).json({msg:err.message}) 

    }
  }
}
module.exports=userCtrl
