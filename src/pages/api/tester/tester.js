import { connectDB } from "../../../utils/Features"
const handler=async(req,res)=>{
    await connectDB();
    res.json({
        success:true,
        message:`Route working`
    })
}
export default handler