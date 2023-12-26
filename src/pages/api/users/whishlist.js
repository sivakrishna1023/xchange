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
        if(!ad_id) return errorHandler(res,401,"Try again Later");
        const isexist= user.wishlist.some((curr_id)=>curr_id.toString()===ad_id.toString());
        if(!isexist){
            user.wishlist.push(ad_id);
            await user.save();
        }
        await disconnect();
        res.json({
            success: true,
            message: "Added To your Favorites",
        });
});

export default handler;
