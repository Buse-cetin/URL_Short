const mongoose=require('mongoose');
const shortId=require('shortid')

const shortUrlSchema=new mongoose.Schema({
 full:{type:String },

short:{type:String,  unique:true  ,required:true , default:shortId.generate},


clicks:{type:Number , required:true, default:0}, 


date:{type:Date, default:Date.now}






})



module.exports=mongoose.model('shortUrl',shortUrlSchema);

