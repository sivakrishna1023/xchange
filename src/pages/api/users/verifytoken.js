import { asyncError,
    errorHandler } from "../../../middlewares/Error";
import {User} from '../../../models/user'
import bcrypt from 'bcrypt'
import { generateToken, 
      connectDB, 
      sendEmail,
      verifytoken,
     } from "../../../utils/Features";
const handler = asyncError(async (req, res)  => {
    if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");
    const {email} = req.body;
    if (!email)
    return errorHandler(res, 400, "Please enter all fields");
    await connectDB();  
    var user = await User.findOne({ email });
    if (!user) return errorHandler(res, 400, "Invalid User");
    const verifytoken1= await verifytoken(email,user.password);
    const user1=await User.findByIdAndUpdate(user._id,{verifytoken:verifytoken1});
    sendEmail({email:user.email,emailtype:`verify`,subject:`Please verify your mail`,message:`Thank you choosing us <a href="${process.env.DOMAIN}/verfication?token=${verifytoken1}&&email=${user.email}" target="_blank"> Click Here </a> to verify your mail...!!`});
    res.status(201).json({
    success: true,
    message: "Token send",
    });
});

export default handler;
