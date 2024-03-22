import {connectDB,disconnect} from '../../../utils/Features'
import {errorHandler,asyncError} from '../../../middlewares/Error'
import {Ads} from '../../../models/ads'
 
const handler = asyncError(async (req, res) => {
        if (req.method !== 'GET')
        return errorHandler(res, 400, "Only POST Method is allowed");  
        await connectDB();
        const contentType = req.headers['filter'];
        const pagenumber=1;
        const adsperpage=8;
        const skipads=(pagenumber-1)*adsperpage;
        try{
          if(contentType==null || contentType===''){
            const ads= await  Ads.find({draft: false}).skip(skipads).limit(adsperpage);
            await disconnect();
            const found=true;
            res.status(200).json({
                success: true, 
                message: `New Tasks`,
                ads,
                found,
              });
        }else{
            const regexQuery = new RegExp(contentType, 'i');
            var ads = await Ads.find({
                $and: [
                  {
                    $or: [
                      { Address: regexQuery },
                      { City: regexQuery },
                      { state: regexQuery },
                    ],
                  },
                  { draft: false }, 
                ],
              }).skip(skipads).limit(adsperpage);
            var found=true;
            if(ads.length==0){
              ads= await  Ads.find({draft: false}).skip(skipads).limit(adsperpage);
              found=false;
            }
            await disconnect();
            res.status(200).json({
                success: true,
                message: `New tasks`,
                ads,
                found
            });
        }   
        }catch{
          res.status(400).json({
            success: false,
            found:false,
        });
        }
});

export default handler;