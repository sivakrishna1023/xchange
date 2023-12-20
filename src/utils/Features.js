import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";
import {User} from '../models/user';
import nodemailer from 'nodemailer'
import cloudinary from 'cloudinary'
 
export const connectDB = async () => {
  try{
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Ads123",
    });
  }catch(error){
    console.log('error in connecting to database',error);
  }
};


const connection = {};

// export const connectDB=async()=> {
//   if (connection.isConnected) {
//     console.log('here 1');
//     return;
//   }
//   if (mongoose.connections.length > 0) {
//     connection.isConnected = mongoose.connections[0].readyState;
//     console.log('here 2');

//     if (connection.isConnected === 1) {
//       console.log('here 3');

//       return;
//     }
//     console.log('here 4');

//     await mongoose.disconnect();
//   }
//   try{
//     console.log('here 5');
//     const db = await mongoose.connect(process.env.MONGO_URI,{
//       dbName: "Ads123",
//     });
//     connection.isConnected = db.connections[0].readyState;
//     console.log('here 6');

//   }catch(error){
//     console.log("Error in connecting Mongo database")
//   }
// }

export const disconnect=async()=>{
      // await mongoose.disconnect();
}


export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};

export const verifytoken=(email,password)=>{
  return jwt.sign({email,password},process.env.JWT_SECRET);
}

export const resettoken=(email,password)=>{
  return jwt.sign({email,password},process.env.JWT_SECRET);
}


export const authfunction=(req,res,next)=>{
  const val=req.headers.authorization;
  if(val){
      const token=val.split(' ')[1];
      jwt.verify(token,SECRET,(err,user)=>{
          if(err){
              return res.status(403);
          }
          else{
              req.user=user;
              next();
          }
      })
  }
  else{
      res.status(401);
  }
}


export const cookieSetter = (res, token, set) => {
  if (set) {
  } else {
  }
};

//Auth

export const checkAuth = async (req) => {
  const val=req.headers.authorization;
  const token=val.split(' ')[1];
  if (!token) return null;
  await connectDB();
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user= await User.findById(decoded._id);
  await disconnect();
  return user
};

// send mail
 
export const sendEmail = async ({email,emailtype,subject,message}) => {
  // const transporter = nodeMailer.createTransport({
  //   host: process.env.SMPT_HOST,
  //   port: process.env.SMPT_PORT,
  //   auth: {
  //     user: process.env.SMPT_MAIL,
  //     pass: process.env.SMPT_PASSWORD,
  //   },
  // });
  var transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "23f5021921f2b1beea52ac12a29d6e89"
    }
  });
  const mailOptions = {
    from: ' "Xchange"  <mailtrap@savelivess.com >   ',
    to: `${email}`,
    subject: subject,
    html: message,
  };

  const res=await transport.sendMail(mailOptions);

}; 
