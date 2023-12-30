import {asyncError,
    errorHandler} from '../../../middlewares/Error'
  import {checkAuth} from '../../../utils/Features'
  import {Ads} from '../../../models/ads'
  import {User} from '../../../models/user'
  import { connectDB,disconnect } from '../../../utils/Features';
  
  
  const handler = asyncError(async (req, res) => {
          if (req.method !== "GET")
          return errorHandler(res, 400, "Only GET Method is allowed");
            await connectDB();
  
          const user = await checkAuth(req);
  
         if (!user) return errorHandler(res, 401, "Login First");
         try {
            await Ads.deleteMany({ user: user._id });
            await User.findByIdAndDelete(user._id);
            res.json({
                success: true,
                message: "Successfully Deleted..!!"
            });
        } catch (error) {
            console.log(error);
            return errorHandler(res, 500, "Internal Server Error");
        }
  });
  
  export default handler;