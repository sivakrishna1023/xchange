import {asyncError, 
    errorHandler} from '../../../middlewares/Error'
  import { connectDB,sendEmail } from '../../../utils/Features';

const handler = asyncError(async (req, res) => {
    const name=req.body.name;
    const message=req.body.message;
    const mail=`xchange.hyderabad@gmail.com`;
    sendEmail({email:mail,emailtype:"feedBack",subject:`Feed back from ${mail}`,message:`Name:${name} <br/>  My message:  ${message} `});
    res.json({
    success: true,
    });
});
  
export default handler;