import { asyncError,
       errorHandler } from "../../../middlewares/Error";
import {User} from '../../../models/user'
import bcrypt from 'bcrypt'
import { generateToken, 
         connectDB, 
         sendEmail,
         verifytoken,disconnect
        } from "../../../utils/Features";
const handler = asyncError(async (req, res)  => {
    if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");
    const { firstname,lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password)
    return errorHandler(res, 400, "Please enter all fields");
    await connectDB();  
    let user = await User.findOne({ email });
    if (user) return errorHandler(res, 400, "User registered with this email");
    const hashedPassword = await bcrypt.hash(password, 10);
    const verifytoken1= await verifytoken(email,password);
    user = await User.create({
      firstname,
      lastname,
      email,
      verifytoken:verifytoken1,
      password: hashedPassword,
    }); 
    const token = generateToken(user._id);
    await disconnect();
    res.status(201).json({
      success: true,
      message: "Please verify Your mail",
      user,
      token
    });
  });
  
  export default handler;
  