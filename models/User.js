 import mongoose from "mongoose";

 const userSchema = mongoose.Schema({
     firstName:{
        type: String,
        requied:true
     },
     lastName:{
        type: String,
        requied:true
     },
     dob:{
        type: Date,
        default: Date.now
     },
 });

 export default mongoose.model('User', userSchema);