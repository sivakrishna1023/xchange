import { asyncError,errorHandler } from "@/src/middlewares/Error";
import { checkAuth, connectDB, connectCloud,verifytoken,disconnect } from "@/src/utils/Features";
import { User } from "@/src/models/user";
import bcrypt from 'bcrypt';
const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
  return errorHandler(res, 400, "Only POST Method is allowed");
    await connectDB();
    const user = await User.findOne({email:req.body.email});
    if (!user) return errorHandler(res, 401, "Not valid preson");
    const token=req.body.token;
    const time=Date.now();
    if(token===user.resetPasswordToken && user.resetPasswordExpire>time){
        user.password= await bcrypt.hash(req.body.password, 10);
        user.resetPasswordToken="Undefined";
        user.resetPasswordExpire=Date.now();
        await user.save();
        await disconnect();
        console.log(user);
        res.status(200).json({ 
            success: true,
            message:"success"
          });
    }
    else{
      await disconnect();
        return errorHandler(res,401,"Session Expired, get another token to reset password");
    }
  });
  
  export default handler;
  