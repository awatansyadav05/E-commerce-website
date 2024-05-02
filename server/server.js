const express= require ('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
app.use(express.json());
const PORT=process.env.PORT || 5000;
app.get('/', (req,res)=> {
  res.json({msg:"This is example"})
})
app.listen (PORT,()=> {
  console.log("SERVER IS RUNNING....");
})

////routes
app.use('/user',require('./routes/userRouter'))



//mongodb connect

const URI= process.env.MONGODB_URL;
//console.log(process.env.MONGODB_URL);

mongoose.connect(URI, {
  // useCreateIndex: true,
  // useFindAndModify:false,
  // useNewUrlParse: true,
  // useUnifiedTopology: true
}).then(()=>{
  console.log("MongoDB Connected");
}).catch(err => {
  console.log(err);
})