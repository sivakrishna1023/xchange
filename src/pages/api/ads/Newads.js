import { asyncError,
        errorHandler } from "../../../middlewares/Error";
import { checkAuth, connectDB,connectCloud } from "../../../utils/Features";
import { Ads } from "../../../models/ads";
import cloudinary from 'cloudinary';

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");
    await connectDB();
    await connectCloud(); 
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
 
  const user = await checkAuth(req);
  if (!user) return errorHandler(res, 401, "Login First");

      console.log(images);
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
        images,
        user: user._id,
      });
      console.log(newad);
      res.json({
        success: true,
        message: "Ad Created",
      });
});

export default handler;
