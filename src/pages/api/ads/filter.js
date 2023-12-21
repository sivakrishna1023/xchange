import {connectDB,
    generateToken,
    cookieSetter,disconnect} from '../../../utils/Features'
import {errorHandler, 
   asyncError} from '../../../middlewares/Error'
import {Ads} from '../../../models/ads'
import bcrypt from 'bcrypt';

const handler = asyncError(async (req, res) => {
        if (req.method !== "POST")
        return errorHandler(res, 400, "Only POST Method is allowed");  
        await connectDB();
        
        if(req.body.fill===''){
            const ads= await  Ads.find({draft: false});
            await disconnect();
            res.status(200).json({
                success: true, 
                message: `New Tasks`,
                ads:[],
              });
        }else{
            const ads= await Ads.find({Category:req.body.fill,draft: false});
            await disconnect();
            // console.log(ads.length());
            res.status(200).json({
                success: true,
                message: `New tasks`,
                ads
            });
        }   
});

export default handler;