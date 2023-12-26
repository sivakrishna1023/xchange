import { asyncError,
    errorHandler } from "../../../middlewares/Error";
import { checkAuth, connectDB,disconnect} from "../../../utils/Features";
import { Ads } from "../../../models/ads";

const handler = asyncError(async (req, res) => {
        if (req.method !== "GET")
        return errorHandler(res, 400, "Only GET Method is allowed");
        await connectDB();
        const user = await checkAuth(req);
        if (!user) return errorHandler(res, 401, "Login First");
        const adIds = user.wishlist || []; 
        const wishlistAds = await Ads.find({ _id: { $in: adIds } });
        await disconnect();
        res.json({
            success: true,
            message: "Added To your Favorites",
            ads:wishlistAds
        });
});

export default handler;
