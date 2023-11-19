import {connectDB,
       generateToken,
       cookieSetter} from '../../../utils/Features'
import {errorHandler, 
      asyncError} from '../../../middlewares/Error'
import {User} from '../../../models/user'
import bcrypt from 'bcrypt';

const handler = asyncError(async (req, res) => {
    if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");
  
    const { email, password } = req.body;

    if (!email || !password)
    return errorHandler(res, 400, "Please enter all fields");
  
    await connectDB();
  
    const user = await User.findOne({ email }).select("+password");
  
   if (!user) return errorHandler(res, 400, "Invalid Email or Password");
   console.log(password);
   console.log(user.password);
   const isMatch= await bcrypt.compare(password,user.password);
  
    if (!isMatch) return errorHandler(res, 400, "Invalid Email or Password");
    // const verified=user.isverified;
    // if(!verified) return errorHandler(res,400,"Please varify Your mail to continue..!!");
    const token = generateToken(user._id);
    res.status(200).json({
      success: true,
      message: `Welcome back`,
      user,
      token
    });
  });
  
  export default handler;