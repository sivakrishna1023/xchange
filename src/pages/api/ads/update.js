import { asyncError,
    errorHandler } from "../../../middlewares/Error";
import { checkAuth, connectDB,disconnect} from "../../../utils/Features";
import { Ads } from "../../../models/ads";

const handler = asyncError(async (req, res) => {
        if (req.method !== "POST")
        return errorHandler(res, 400, "Only POST Method is allowed");
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

        const newdata={
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
        }
        await connectDB();
        const user = await checkAuth(req);
        if (!user) return errorHandler(res, 401, "Login First");
        const id=req.body.id;
        const user12 = await Ads.findByIdAndUpdate(id,newdata,{
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        await disconnect();
        res.json({
            success: true,
            message: "Ad updated successfully",
        });
});

export default handler;
