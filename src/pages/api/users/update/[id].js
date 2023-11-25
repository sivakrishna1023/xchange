import { asyncError,errorHandler } from "@/src/middlewares/Error";
import cloudinary from 'cloudinary'
import { checkAuth, connectDB, connectCloud,disconnect } from "@/src/utils/Features";
import { User } from "@/src/models/user";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
  return errorHandler(res, 400, "Only POST Method is allowed");
      const newUserData = {
      firstname: req.body.firstname, 
      lastname: req.body.lastname,  
      Phonenumber:req.body.Phonenumber,
      Location:req.body.Location,
      website:req.body.website,
      Biograpy:req.body.Biography,
      Facebook:req.body.FaceBook,
      Youtube:req.body.Youtube,
      Instagram:req.body.Instagram,
      Tiktok:req.body.Tiktok,
      Linkedin:req.body.Linkedin,
      Snapchat:req.body.Snapchat,
      Pinterest:req.body.Pinterest,
      Twitter:req.body.Twitter,
      Reddit:req.body.Reddit,
      avatar:req.body.avatar,
      };
    await connectDB();
    const user = await checkAuth(req);
    if (!user) return errorHandler(res, 401, "Login First");
    const user_id=user._id;
    const user1 = await User.findById(user._id); 
    if(!user1) return errorHandler(res,401,"Login First");
             const user12 = await User.findByIdAndUpdate(user_id, newUserData, {
                new: true,
                runValidators: true,
                useFindAndModify: false,
              });
              await disconnect();
              res.status(200).json({
                success: true,
              });
  });
  
  export default handler;
  