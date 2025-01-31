require('dotenv').config();
const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello from the backend!');
});

const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});