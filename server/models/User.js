const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const userSchema=new mongoose.Schema({
    name:{type:String,trim:true},
    email:{type:String,required:true,unique:true,lowercase:true,trim:true},
    password:{type:String,required:true},
    loyalityPoints:{type:Number,default:0},
    orderHistory:[{type:mongoose.Schema.Types.ObjectId,ref:'order'}]
})
userSchema.pre('save',async function (next){
    if (!this.isModified('password')){
        return next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
    next();
    userSchema.methods.comparePassword=async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password);
    }
})
const User=mongoose.model('User',userSchema);
module.exports=User;