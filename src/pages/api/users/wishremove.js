import { asyncError,
    errorHandler } from "../../../middlewares/Error";
import { checkAuth, connectDB,disconnect} from "../../../utils/Features";
import { Ads } from "../../../models/ads";

const handler = asyncError(async (req, res) => {
        if (req.method !== "POST")
        return errorHandler(res, 400, "Only POST Method is allowed");
        await connectDB();
        const user = await checkAuth(req);
        if (!user) return errorHandler(res, 401, "Login First");
        const ad_id=req.body.id;
        const ad_index= user.wishlist.findIndex((curr_id)=>curr_id.toString()===ad_id.toString());
        if(ad_index!==-1){
            user.wishlist.splice(ad_index, 1);
            await user.save();
        }
        await disconnect();
        res.json({
            success: true,
            message: "Removed From your Favorites",
        });
});

export default handler;
