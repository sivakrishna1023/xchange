import { asyncError,
        errorHandler } from "../../../middlewares/Error";
import { checkAuth, connectDB} from "../../../utils/Features";
import { Ads } from "../../../models/ads";
  
const handler = asyncError(async (req, res) => {
    if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");
    await connectDB();
  const { 
    Category,
    Adname,
    Brand ,
    Model ,
    Description,
    Adprice,
    Features,
    Condition,
    Negotable,
    draft,
    country,
    Name,
    Address, 
    City,
    state,
    postcode,
    email,
    phone,
    images,
   } = req.body;
   console.log(draft);
  const user = await checkAuth(req);
  if (!user) return errorHandler(res, 401, "Login First");
  const verified=user.isverified;
 if(!verified) return errorHandler(res,400,"Please varify Your mail to continue..!!");
      const newad =await Ads.create({
        Category,
        Adname,
        Brand ,
        Model ,
        Description,
        Adprice,
        Features,
        Condition,
        Negotable,
        country,
        Name,
        Address,
        City,
        state,
        postcode,
        email,
        phone,
        draft,
        images,
        user: user._id,
      });
      res.json({
        success: true,
        message: "Ad Created",
      });
});

export default handler;
