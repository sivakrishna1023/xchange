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
    phone
   } = req.body;
 
  const user = await checkAuth(req);
  console.log(user);
  if (!user) return errorHandler(res, 401, "Login First");

      var images=[ {
        public_id:'',
        url:''
      },];
      if(req.body.images!==""){
        let images1 = [];

        if (typeof req.body.images === "string") {
          images1.push(req.body.images);
        } else {
          images1 = req.body.images;
        }
      
        const imagesLinks = [];
      
        for (let i = 0; i < images1.length; i++) {
          const result = await cloudinary.v2.uploader.upload(images1[i], {
            folder: "Ads",
          });
      
          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }
        images=imagesLinks;
      } 
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
    message: "Task Created",
  });
});

export default handler;
