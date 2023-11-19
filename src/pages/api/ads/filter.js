import {connectDB,
    generateToken,
    cookieSetter} from '../../../utils/Features'
import {errorHandler, 
   asyncError} from '../../../middlewares/Error'
import {Ads} from '../../../models/ads'
import bcrypt from 'bcrypt';

const handler = asyncError(async (req, res) => {
        if (req.method !== "GET")
        return errorHandler(res, 400, "Only POST Method is allowed");  
        if(!req.body){
            res.status(200).json({
                success: true,
                message: `Welcome back`,
                ads:[],
              });
        }
        const ads=Ads.find({Category:req.body});
        res.status(200).json({
            success: true,
            message: `Welcome back`,
            ads
        });
});

export default handler;