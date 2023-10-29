import { asyncError,
       errorHandler } from "../../../middlewares/Error";
import {User} from '../../../models/user'
import bcrypt from 'bcrypt'
import { generateToken,
         cookieSetter,
         connectDB, 
         sendEmail
        } from "../../../utils/Features";
const handler = asyncError(async (req, res) => {
    if (req.method !== "POST")
      return errorHandler(res, 400, "Only POST Method is allowed");
  
    const { firstname,lastname, email, password } = req.body;
  
    if (!firstname || !lastname || !email || !password)
      return errorHandler(res, 400, "Please enter all fields");
  
    await connectDB();  
    let user = await User.findOne({ email });
    if (user) return errorHandler(res, 400, "User registered with this email");
    const hashedPassword = await bcrypt.hash(password, 10);
    const avatar={
      public_id:'',
      url: ''
    }
    user = await User.create({
      firstname,
      lastname,
      email,
      avatar,
      password: hashedPassword,
    });
    console.log(user);
    // await sendEmail({email:saveduser.email,emailtype:"VERIFY",userid:saveduser._id})
  
    sendEmail({email:user.email,emailtype:`verify`,subject:`Please verify your mail`,message:`Thank you choosing us click here..!!`});

    const token = generateToken(user._id);
    
  
    res.status(201).json({
      success: true,
      message: "Registered Successfully",
      user,
      token
    });
  });
  
  export default handler;
  