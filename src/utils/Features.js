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

//Generate the webtoken

export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};

//set the cookie in the browser

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token", set ? token : "", {
      path: "/",
      httpOnly: true,
      maxAge: set ? 60*1000 : 0,
    })
  );
};
export const cookieSetter2 = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token",null, {
      path: "/",
      httpOnly: true,
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    })
  );
};


//Auth

export const checkAuth = async (req) => {
  const cookie = req.headers.cookie;
  if (!cookie) return null;
  // Split the cookie string into individual cookie parameters
  const cookieParams = cookie.split('; ');
  
  // Find the parameter that starts with "token="
  const tokenParam = cookieParams.find(param => param.startsWith('token='));
  const tokenValue = tokenParam.split('=')[1];
  // if (tokenParam) {
  //   // Extract the value assigned to the token parameter
  //   const tokenValue = tokenParam.split('=')[1];
  //   //console.log("Token value:", tokenValue);
  // } else {
  //   //console.log("Token parameter not found in the cookie.");
  // }
  const token = tokenValue;
  //console.log(token);
  //console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //console.log(decoded);
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
