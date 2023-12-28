import { asyncError,errorHandler } from "@/src/middlewares/Error";
import { checkAuth, connectDB, connectCloud,verifytoken,disconnect } from "@/src/utils/Features";
import { User } from "@/src/models/user";
const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
  return errorHandler(res, 400, "Only POST Method is allowed");
    await connectDB();
    const user = await User.findOne({email:req.body.email});
    // console.log(user);
    if (!user) return errorHandler(res, 401, "User Not found");
    var token=req.body.token;
    token.toString();
    if(token===user.verifytoken){
        user.isverified=true;
        await user.save();
        res.status(200).json({
            success: true,
            verified:user.isverified,
            message:"Your Verified"
          });
    }
    else{
        return errorHandler(res,401,"The Link expired or Reset Try with new Link");
    }
  });
  
  export default handler;
  