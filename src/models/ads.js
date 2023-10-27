import mongoose from "mongoose";

const Schema= new mongoose.Schema({
    Category:{type:String, require: true} ,
    Adname:{type:String, require: true} ,
    Brand:{type:String, require: true} ,
    Model:{type:String, require: true} ,
    Description:{type:String, require: true} ,
    Adprice:{type:Number, require: true} ,
    Features:{type:String, require: true} ,
    Condition:{type:String, require: true} ,
    Negotable:{type:String, require: true} ,

    country:{type:String,require: true},
    Name:{type:String,require: true},
    Address:{type:String,require: true},
    City:{type:String,require: true},
    state:{type:String,require: true},
    postcode:{type:Number,require: true},
    email:{type:String,require: true},
    phone:{type:Number,require: true},
    createdAt: { type: Date,default: Date.now},

      //uploading the pics 
      images: [
        {
          public_id: {
            type: String,
          },
          url: {
            type: String,
          },
        },
      ],
      //Post Ads --> Step-3
      //faster:{type:Boolean,default:false},

      //Created by
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
})



mongoose.models = {};

export const Ads = mongoose.model("Ads", Schema);