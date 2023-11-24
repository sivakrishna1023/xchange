import mongoose from "mongoose";

const Schema= new mongoose.Schema({
    Category:{type:String, require: true} ,
    Adname:{type:String, } ,
    Brand:{type:String, } ,
    Model:{type:String, } ,
    Description:{type:String, } ,
    Adprice:{type:String, } ,
    Features:{type:String, } ,
    Condition:{type:String, } ,
    Negotable:{type:String, } ,

    country:{type:String,},
    Name:{type:String,},
    Address:{type:String,},
    City:{type:String,},
    state:{type:String,},
    postcode:{type:String,},
    email:{type:String,},
    phone:{type:String,},
    createdAt: { type: Date,default: Date.now},
    draft:{type:Boolean,default:true},
      //uploading the pics 
      images: [
        {
          type: String,  
        }
      ],
      //Created by
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
})



mongoose.models = {};

export const Ads = mongoose.model("Ads", Schema);