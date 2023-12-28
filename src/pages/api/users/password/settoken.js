import { asyncError,errorHandler } from "@/src/middlewares/Error";
import { checkAuth, connectDB, connectCloud,verifytoken,resettoken,sendEmail } from "@/src/utils/Features";
import { User } from "@/src/models/user";
const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
  return errorHandler(res, 400, "Only POST Method is allowed");

    await connectDB();
    const user = await User.findOne({email:req.body.email});
    if (!user) return errorHandler(res, 401, "Not valid preson");
    const token1= await resettoken(req.body.email);
    user.resetPasswordToken=token1;
    user.resetPasswordExpire=Date.now()+60*60*1000;
    await user.save();
    const is_sent=sendEmail({email:user.email,emailtype:`verify`,subject:`Reset Password`,message:`Welcome Back User <a href="${process.env.DOMAIN}/newpassword?token=${token1}&&email=${req.body.email}" target="_blank"> Click Here </a> to Reset Your Password...!!`});
    if(!is_sent) return errorHandler(res,401,"Failed To send the verify Token try again Later");
       res.status(200).json({
        success: true,
        message:"Reset Link send to your mail",
      });
});
export default handler;