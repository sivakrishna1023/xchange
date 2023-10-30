import { asyncError,errorHandler } from "@/src/middlewares/Error";
import cloudinary from 'cloudinary'
import { checkAuth, connectDB, connectCloud } from "@/src/utils/Features";
import { User } from "@/src/models/user";

const handler = asyncError(async (req, res) => {
   
      const newUserData = {
      firstname: req.body.firstname,
      lastname: req.body,lastname,
        
      Phonenumber:req.body.Phonenumber,
      Location:req.body.Location,
      website:req.body.website,
      Biograpy:req.body.Biograpy,
    
      Facebook:req.body.Facebook,
      Youtube:req.body.Youtube,
      Instagram:req.body.Instagram,
      Tiktok:req.body.Tiktok,
      Linkedin:req.body.Linkedin,
      Snapchat:req.body.Snapchat,
      Pinterest:req.body.Pinterest,
      Twitter:req.body.Twitter,
      Reddit:req.body.Reddit,
      };
    console.log(newUserData);
    await connectDB();
    await connectCloud();
    const user = await checkAuth(req);
    if (!user) return errorHandler(res, 401, "Login First");
    const user_id=user._id;
    const user1 = await User.findById(user._id);
            if (req.body.avatar !== "") {
                const imageId = user.avatar.url;
                if(imageId!=="") await cloudinary.v2.uploader.destroy(imageId);
                const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
                folder: "avatars",
                width: 150,
                crop: "scale",
                });
                newUserData.avatar = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
                };
            }
             const user12 = await User.findByIdAndUpdate(user_id, newUserData, {
                new: true,
                runValidators: true,
                useFindAndModify: false,
              });
            
              res.status(200).json({
                success: true,
              });
  });
  
  export default handler;
  