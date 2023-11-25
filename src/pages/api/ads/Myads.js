import {asyncError,
  errorHandler} from '../../../middlewares/Error'
import {checkAuth} from '../../../utils/Features'
import {Ads} from '../../../models/ads'
import { connectDB,disconnect } from '../../../utils/Features';


const handler = asyncError(async (req, res) => {
        if (req.method !== "GET")
        return errorHandler(res, 400, "Only GET Method is allowed");
          await connectDB();

        const user = await checkAuth(req);

        if (!user) return errorHandler(res, 401, "Login First");

        const ads = await Ads.find({ 
          $and: [
              { user: user._id },
              { draft: false }
          ]
       });
       await disconnect();
        res.json({
        success: true,
        ads,
        });
});

export default handler;