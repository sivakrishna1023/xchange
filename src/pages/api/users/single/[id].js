import {asyncError,
    errorHandler} from '../../../../middlewares/Error'
  import {User} from '../../../../models/user'
  import { connectDB ,disconnect} from '../../../../utils/Features';
  import mongoose from 'mongoose';

  const handler = asyncError(async (req, res) => {
   if (req.method !== "GET")
   return errorHandler(res, 400, "Only GET Method is allowed");
   await connectDB();

   const user_id = req.query.id;
   const [, value] = user_id.split('=');
   console.log(value); 

    const user = await User.findById({_id:value});
    await disconnect();
    res.json({
    success: true,
    user,
    });
    });
    
  export default handler;