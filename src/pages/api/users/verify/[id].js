import { asyncError,errorHandler } from "@/src/middlewares/Error";
import { checkAuth, connectDB, connectCloud,verifytoken,disconnect } from "@/src/utils/Features";
import { User } from "@/src/models/user";
const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
  return errorHandler(res, 400, "Only POST Method is allowed");
    await connectDB();
    const user = await User.findOne({email:req.body.email});
    if (!user) return errorHandler(res, 401, "Not valid preson");
    const token=req.body.token;
    if(token===user.verifytoken){
        user.isverified=true;
        await user.save();
        await disconnect();
        res.status(200).json({
            success: true,
            verified:user.isverified,
            message:"success"
          });
    }
    else{
      await disconnect();
        return errorHandler(res,401,"Got error in verifying mail try again later");
    }
  });
  
  export default handler;
  