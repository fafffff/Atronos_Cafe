const mongoose=require('mongoose');
const menuItemSchema=new mongoose.Schema({
    name:String,
    Price:Number,
    description:String,
    imageUrl:String,
    stock:{type:Number,default:0}
})
const MenuItem=mongoose.model('MenuItem',menuItemSchema)
module.exports=MenuItem;