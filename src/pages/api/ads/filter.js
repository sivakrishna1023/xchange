import {connectDB,
    generateToken,
    cookieSetter,disconnect} from '../../../utils/Features'
import {errorHandler, 
   asyncError} from '../../../middlewares/Error'
import {Ads} from '../../../models/ads'
import bcrypt from 'bcrypt'; 

const handler = asyncError(async (req, res) => {
        if (req.method !== 'GET')
        return errorHandler(res, 400, "Only POST Method is allowed");  
        await connectDB();

        const contentType = req.headers['filter'];
        const pagenumber=req.headers['pagenumber'];
        const adsperpage=9;
        const skipads=(pagenumber-1)*8; 
        try{
              
            if(contentType===null || contentType===''){
              const ads= await  Ads.find({draft: false}).skip(skipads).limit(adsperpage);
              await disconnect();
              const found=true;
              var isnext=true;
              if(ads.length<9){
                isnext=false;
              }else{
                if(ads.length>1) ads.pop();
              }
              res.status(200).json({
                  success: true, 
                  message: `New Tasks`,
                  ads,
                  found,
                  isnext,
                  pagenumber:pagenumber+1,
                });
            }else{
                const regexQuery = new RegExp(contentType, 'i');
                var ads = await Ads.find({
                    $and: [
                      {
                        $or: [
                          { Adname: regexQuery },
                          { Brand: regexQuery },
                          { Model: regexQuery },
                          { Category:regexQuery},
                        ],
                      },
                      { draft: false }, 
                    ],
                  }).skip(skipads).limit(adsperpage);
                await disconnect();
                var found=true;
                if(ads.length==0){
                  ads= await  Ads.find({draft: false}).skip(skipads).limit(adsperpage);
                  found=false;
                }
                var isnext=true;
                if(ads.length<9){
                  isnext=false;
                }else{
                  if(ads.length>1) ads.pop();
                }
                await disconnect();
                res.status(200).json({
                    success: true,
                    message: `New tasks`,
                    ads,
                    found,
                    isnext,
                    pagenumber:pagenumber+1,
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