import {asyncError,
    errorHandler} from '../../../middlewares/Error'
  import {checkAuth} from '../../../utils/Features'
  import {Ads} from '../../../models/ads'
  import { connectDB } from '../../../utils/Features';
  
  
  const handler = asyncError(async (req, res) => {
   if (req.method !== "GET")
   return errorHandler(res, 400, "Only GET Method is allowed");
    await connectDB();
  
  const ads = await Ads.find({draft:false});
  
  res.json({
   success: true,
   ads,
  });
  });
  
  export default handler;