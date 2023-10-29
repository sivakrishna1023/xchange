'use client'
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";
import {User} from '../models/user';
import nodeMailer from 'nodemailer'
import cloudinary from 'cloudinary'

//connects to the database
export const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Ads",
  });
  console.log(`Database Connected on ${connection.host}`);
};
// http://localhost:3000/post-ad

//Generate the webtoken

export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};

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
   
    // // Set the cookie with the token
    // res.setHeader(
    //   "Set-Cookie",
    //   serialize("token", token, {
    //     path: "/",
    //     httpOnly: true,
    //     maxAge: 60 * 1000, // Set the desired expiration time
    //   })
    // );
  } else {
    // Delete the "token" cookie by setting it with an expiration date in the past
   
    // res.setHeader(
    //   "Set-Cookie",
    //   serialize("token", "", {
    //     path: "/",
    //     httpOnly: true,
    //     maxAge: 0, // Set maxAge to 0 to delete the cookie
    //     expires: new Date(0), // Set an expiration date in the past
    //   })
    // );
  }
};


// export const cookieSetter2 = (res, token, set) => {
//   res.setHeader(
//     "Set-Cookie",
//     serialize("token",null, {
//       path: "/",
//       httpOnly: true,
//       maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
//     })
//   );
// };


//Auth

export const checkAuth = async (req) => {
  const val=req.headers.authorization;
  const token=val.split(' ')[1];
  console.log(token);
  if (!token) return null;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return await User.findById(decoded._id);
};

// send mail

export const sendEmail = async ({email,emailtype,subject,message}) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
   console.log(email);
   console.log(subject);
   console.log(message);
   console.log(emailtype);
  // var transport = nodemailer.createTransport({
  //   host: "sandbox.smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "511565cb817aa7",
  //     pass: "1cd4064d00898c"
  //   }
  // });
  const mailOptions = {
    from: process.env.FROM_MAIL,
    to: email,
    subject: subject,
    html: message,
  };

  const res=await transporter.sendMail(mailOptions);
  // return res;
}; 


// Conntect to the clounary
export const connectCloud=()=>cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
