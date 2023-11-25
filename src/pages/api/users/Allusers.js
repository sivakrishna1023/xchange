import {asyncError, 
    errorHandler} from '../../../middlewares/Error'
  import {checkAuth} from '../../../utils/Features'
  import {User} from '../../../models/user'
  import { connectDB ,disconnect} from '../../../utils/Features';
  
  
  const handler = asyncError(async (req, res) => {
   if (req.method !== "GET")
   return errorHandler(res, 400, "Only GET Method is allowed");
    await connectDB();
    const users = await User.find({});
    await disconnect();
    res.json({
    success: true,
    users,
    });
    });
  
  export default handler;