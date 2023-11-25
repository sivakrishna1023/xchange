import {asyncError,
    errorHandler} from '../../../../middlewares/Error'
  import {Ads} from '../../../../models/ads'
  import { connectDB,disconnect} from '../../../../utils/Features';
  import mongoose from 'mongoose';

  const handler = asyncError(async (req, res) => {
   if (req.method !== "GET")
   return errorHandler(res, 400, "Only GET Method is allowed");
   await connectDB();
   const ad_id = req.query.id;
   const [, value] = ad_id.split('=');
   const ad = await Ads.findById({_id:value});
   await disconnect();
    res.json({
    success: true,
    ad,
    });
    });
    
  export default handler;