require('dotenv').config;
const mongoose=require('mongoose');
  const mongoURI=process.env.MONGODB_URI;
  mongoose.connect(
    mongoURI
  ).then(
    ()=>console.log('MongoDB connected!')
  )
  .catch(err=>console.error('Error connecting to mongoDB...',err));
module.exports=mongoose;