
import { asyncError,
        errorHandler } from "../../../middlewares/Error";
import { checkAuth } from "../../../utils/Features";
import {User} from '../../../models/user'
import {Ads} from '../../../models/ads'


const handler = asyncError(async (req, res) => {
    if (req.method !== "POST")
    return errorHandler(res, 400, "Only GET Method is allowed");
    const user = await checkAuth(req);
    if (!user) return errorHandler(res, 401, "Login First");
    if(!req.body.id) return errorHandler(res,401,"No id found");
    const id=req.body.id;
    const seller=await User.findById({_id:id});
    if(!seller) return errorHandler(res,401,"Seller Not Found");
    const ads = await Ads.find({ 
        $and: [
            { user: seller._id },
            { draft: false }
        ]
     });
    res.status(200).json({
      success: true,
      seller,
      ads,
    });
  });
  
export default handler;
  