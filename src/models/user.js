import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  //Basic Details to Register
    firstname:{ type:String, require:true },
    lastname:{  type:String, require:true },
    email:{ type:String, require: true },
    password:{type: String,require:true},
    createdAt: { type: Date,default: Date.now},
    isverified:{type:Boolean,default:false},
    avatar:{
      type: String
    },
  //Reset the Password
  
  verifytoken:String, 
  resetPasswordToken: String,
  resetPasswordExpire: Date,

  //Secoundary Datails
  Phonenumber:{type:Number},
  Location:{type:String},
  website:{type:String},
  Biograpy:{type:String},
 
  
  //Social Media Links
  Facebook: { type:String },
  Youtube: { type:String },
  Instagram: { type:String },
  Tiktok: { type:String },
  Linkedin: { type:String },
  Snapchat: { type:String },
  Pinterest: { type:String },
  Twitter: { type:String },
  Reddit: { type:String },

  //whishlist
  wishlist:[
    {
      type: mongoose.Schema.ObjectId,
      ref: "Ads",
    }
  ]
})

mongoose.models = {};

export const User = mongoose.model("User", Schema);