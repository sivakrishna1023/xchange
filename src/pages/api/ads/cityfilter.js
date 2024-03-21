import {connectDB,disconnect} from '../../../utils/Features'
import {errorHandler,asyncError} from '../../../middlewares/Error'
import {Ads} from '../../../models/ads'
 
const handler = asyncError(async (req, res) => {
        if (req.method !== 'POST')
        return errorHandler(res, 400, "Only POST Method is allowed");  
        await connectDB();
      
        try{
          if(req.body.fill==null || req.body.fill===''){
            const ads= await  Ads.find({draft: false});
            await disconnect();
            const found=true;
            res.status(200).json({
                success: true, 
                message: `New Tasks`,
                ads,
                found,
              });
        }else{
            const regexQuery = new RegExp(req.body.fill, 'i');
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
              });
            var found=true;
            if(ads.length==0){
              ads= await  Ads.find({draft: false});
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