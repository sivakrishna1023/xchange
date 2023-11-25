import { asyncError,
    errorHandler } from "../../../middlewares/Error";
import { checkAuth, connectDB,disconnect} from "../../../utils/Features";
import { Ads } from "../../../models/ads";
import cloudinary from 'cloudinary';

const handler = asyncError(async (req, res) => {
        if (req.method !== "DELETE")
        return errorHandler(res, 400, "Only POST Method is allowed");
        await connectDB();
        const id=req.body.id;
        const user = await checkAuth(req);
        if (!user) return errorHandler(res, 401, "Login First");
        await Ads.findByIdAndDelete(id);
        await disconnect();
        res.json({
            success: true,
            message:`Deleted successfully`
        });
});

export default handler;
