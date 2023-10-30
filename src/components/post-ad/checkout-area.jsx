'use client'
import React, {useState,useContext} from 'react';
import { useRouter } from 'next/navigation';
import { Context } from '../Clients/clientcomponents';
import Link from 'next/link';
 
const CheckoutArea = () => {
   const {user}=useContext(Context);
   const [Category,setCategory]=useState('');
   const [Adname,setAdname]=useState('');
   const [Brand,setBrand]=useState('');
   const [Model,setModel]=useState('');
   const [Description,setDescription]=useState('');
   const [Adprice,setAdprice]=useState('');
   const [Features,setFeatures]=useState('');
   const [Condition,setCondition]=useState('');
   const [Negotable,setNegotable]=useState('');
   const router=useRouter();
   
   const [country,setcountry]=useState('');
   const [Name,setName]=useState('');
   const [Address,setAddress]=useState('');
   const [City,setCity]=useState('');
   const [state,setstate]=useState('');
   const [postcode,setpostcode]=useState('');
   const [email,setemail]=useState('');
   const [phone,setphone]=useState('');
   const [images, setImages] = useState([]);
   const handler=async()=>{
         try{
               const res=await fetch('/api/ads/Newads',{
                  method:'POST',
                  headers: {
                     'Content-Type': 'application/json' 
                  },
                  body: JSON.stringify({
                     Category,
                     Adname,
                     Brand,
                     Model,
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
                     images
                  })
               })
            const data= await res.json();
            if(data.success){
                 router.replace('/ad-grid')
            }
         }catch(error){
            console.log(error);
         }
   }
   const createProductImagesChange = (e) => {
      const files = Array.from(e.target.files);
  
      setImages([]);
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImages((old) => [...old, reader.result]); 
        };
        reader.readAsDataURL(file);
      });
    };
   //  if(!user._id) return router.replace('/sign-in');
    const [isOpen, setIsOpen] = useState(false)
    const [isShipOpen, setIsShipOpen] = useState(false);
    return (
        <>
          {
             user._id ? <section className="checkout-area pt-100 pb-70 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
             <div className="container">
                <form onSubmit={handler}>
                   <div className="row">
                         <div className="col-lg-6 col-md-12">
                            <div className="checkbox-form">
                               <h3>Address</h3>
                               <div className="row">
                                     <div className="col-md-12">
                                        <div className="country-select">
                                           <label>Country<span className="required">*</span></label>
                                           <select required onClick={(e)=>{setcountry(e.target.value)}}  >
                                                 <option value="India">India</option>
                                                 <option value="Us">Us</option>
                                                 <option value="Canada">Canada</option>
                                                 <option value="Germany">Germany</option>
                                                 <option value="England">England</option>
                                                 <option value="Quatar">Qatar</option>
                                                 <option value="Dominican Republic">Dominican Republic</option>
                                           </select>
                                        </div>
                                     </div>
                                     <div className="col-md-12">
                                        <div className="checkout-form-list">
                                           <label>Name</label>
                                           <input  required onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder="Enter" />
                                        </div>
                                     </div>
                                     <div className="col-md-12">
                                        <div className="checkout-form-list">
                                           <label>Address <span className="required">*</span></label>
                                           <input  required onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder="Street address" />
                                        </div>
                                     </div>
                         
                                     <div className="col-md-12">
                                        <div className="checkout-form-list">
                                           <label>Town / City <span className="required">*</span></label>
                                           <input  required onChange={(e)=>{setCity(e.target.value)}} type="text" placeholder="Town / City" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>State / County <span className="required">*</span></label>
                                           <input  required onChange={(e)=>{setstate(e.target.value)}}  type="text" placeholder="State" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>Postcode / Zip <span className="required">*</span></label>
                                           <input  required onChange={(e)=>{setpostcode(e.target.value)}} type="text" placeholder="Postcode / Zip" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>Email Address <span className="required">*</span></label>
                                           <input   required onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="Enter" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>Phone <span className="required">*</span></label>
                                           <input  required onChange={(e)=>{setphone(e.target.value)}}  type="text" placeholder="Postcode / Zip" />
                                        </div>
                                     </div>
                                     {/* <div className="col-md-12">
                                        <div className="checkout-form-list create-acc">
                                           <input id="cbox" type="checkbox" onClick={() => setIsOpen(!isOpen)} />
                                           <label htmlFor="cbox">Create an account?</label>
                                        </div>
                                        {
                                         isOpen && 
 
                                        <div id="cbox_info" className={`checkout-form-list create-account ${isOpen ? "d-block" : ""}`}>
                                           <p>Create an account by entering the information below. If you are a returning
                                                 customer please login at the top of the page.</p>
                                           <label>Account password <span className="required">*</span></label>
                                           <input type="password" placeholder="password" />
                                        </div>
                                        }
                                     </div> */}
                               </div>
                               {/* <div className="different-address">
                                     <div className="ship-different-title">
                                        <h3>
                                           <label htmlFor="ship-box">Ship to a different address?</label>
                                           <input id="ship-box" type="checkbox" onClick={() => setIsShipOpen(!isShipOpen)} />
                                        </h3>
                                     </div>
                                     {
                                         isShipOpen && 
                                     <div id="ship-box-info" className={`${isShipOpen ? "d-block" : ""}`}>
                                        <div className="row">
                                        <div className="col-md-12">
                                        <div className="country-select">
                                           <label>Country<span className="required">*</span></label>
                                           <select>
                                                 <option value="volvo">India</option>
                                                 <option value="saab">Us</option>
                                                 <option value="mercedes">Canada</option>
                                                 <option value="audi">Germany</option>
                                                 <option value="audi2">England</option>
                                                 <option value="audi3">Qatar</option>
                                                 <option value="audi5">Dominican Republic</option>
                                           </select>
                                        </div>
                                     </div>
                                     <div className="col-md-12">
                                        <div className="checkout-form-list">
                                           <label>Name</label>
                                           <input type="text" placeholder="" />
                                        </div>
                                     </div>
                                           <div className="col-md-12">
                                                 <div className="checkout-form-list">
                                                    <label>Address <span className="required">*</span></label>
                                                    <input type="text" placeholder="Street address" />
                                                 </div>
                                           </div>
                                           <div className="col-md-12">
                                                 <div className="checkout-form-list">
                                                    <label>Town / City <span className="required">*</span></label>
                                                    <input type="text" placeholder="Town / City" />
                                                 </div>
                                           </div>
                                           <div className="col-md-6">
                                                 <div className="checkout-form-list">
                                                    <label>State / County <span className="required">*</span></label>
                                                    <input type="text" placeholder="" />
                                                 </div>
                                           </div>
                                           <div className="col-md-6">
                                                 <div className="checkout-form-list">
                                                    <label>Postcode / Zip <span className="required">*</span></label>
                                                    <input type="text" placeholder="Postcode / Zip" />
                                                 </div>
                                           </div>
                                           <div className="col-md-6">
                                                 <div className="checkout-form-list">
                                                    <label>Email Address <span className="required">*</span></label>
                                                    <input type="email" placeholder="" />
                                                 </div>
                                           </div>
                                           <div className="col-md-6">
                                                 <div className="checkout-form-list">
                                                    <label>Phone <span className="required">*</span></label>
                                                    <input type="text" placeholder="Postcode / Zip" />
                                                 </div>
                                           </div>
                                        </div>
                                     </div>
                                     }
                         
                               </div> */}
                            </div>
                         </div>
                         <div className="col-lg-6 col-md-12">
                            <div className="your-order mb-30 ">
                               <h3>About Ad</h3>
                               <div className="row">
                                           <div className="col-md-12">
                                                 <div className="country-select">
                                                    <label>Category <span className="required">*</span></label>
                                                    <select  required onClick={(e)=>{setCategory(e.target.value)}}   >
                                                   
                                                    <option value="Mobiles">Mobiles</option>
                                                    <option value="Electronics">Electronics</option>
                                                    <option value="Vehicles">Vehicles</option>
                                                    <option value="Home & Living">Home & Living</option>
                                                    <option value="Essentials">Essentials</option>
                                                    <option value="Furniture">Furniture</option>
                                                    <option value="Properties">Properties</option>
                                                    <option value="Home Appliance">Home Appliance</option>
                                                    </select>
                                                 </div>
                                           </div>
                                           <div className="col-md-6">
                                                 <div className="checkout-form-list">
                                                    <label>Ad Name <span className="required">*</span></label>
                                                    <input  required onChange={(e)=>{setAdname(e.target.value)}}  type="text" placeholder=" Ad Name" />
                                                 </div>
                                           </div>
                                           <div className="col-md-6">
                                                 <div className="checkout-form-list">
                                                    <label>Brand <span className="required">*</span></label>
                                                    <input  required onChange={(e)=>{setBrand(e.target.value)}}  type="text" placeholder="Enter" />
                                                 </div>
                                           </div>
                                           <div className="col-md-12">
                                                 <div className="checkout-form-list">
                                                    <label>Model</label>
                                                    <input  required  onChange={(e)=>{setModel(e.target.value)}}  type="text" placeholder="Enter" />
                                                 </div>
                                           </div>
                                           <div className="order-notes">
                                        <div className="checkout-form-list">
                                           <label>Ad Description</label>
                                           <textarea  required  onChange={(e)=>{setDescription(e.target.value)}}  id="checkout-mess" cols="30" rows="10"
                                                 placeholder="Notes about your ad, e.g. special notes for delivery."></textarea>
                                        </div>
                                     </div>
                                           <div className="col-md-12">
                                                 <div className="checkout-form-list">
                                                    <label>Ad Price <span className="required">*</span></label>
                                                    <input  required onChange={(e)=>{setAdprice(e.target.value)}}  type="text" placeholder="Ad Price" />
                                                 </div>
                                           </div>
                                           <div className="col-md-6">
                                                 <div className="checkout-form-list">
                                                    <label>Features<span className="required">*</span></label>
                                                    <input  required onChange={(e)=>{setFeatures(e.target.value)}}  type="text" placeholder="" />
                                                 </div>
                                           </div>
                         
                                           <div className="col-md-12">
                                                 <div className="country-select">
                                                    <label>Condition <span className="required">*</span></label>
                                                    <select  required onClick={(e)=>{setCondition(e.target.value)}}  >
                                                       <option value="Good">Good</option>
                                                       <option value="Bad">Bad</option>
                                                       <option value="New">New</option>
                                                       <option value="Old">Old</option>
                                                       <option value="Very New">Very New</option>
                                                       <option value="Very Old">Very Old</option>
                                                    </select>
                                                 </div>
                                           </div>
                                           <div className="col-md-12">
                                                 <div className="country-select">
                                                    <label>Negotiable <span className="required">*</span></label>
                                                    <select  required onClick={(e)=>{setNegotable(e.target.value)}} >
                                                       <option value="Yes">Yes</option>
                                                       <option value="Noo">No</option>
                                                    </select>
                                                 </div>
                                           </div>
                                           <div className="col-md-12">
                                                 <div className="country-select">
                                                    <label>Upload Photo<span className="required">*</span></label>
                                                    <input onChange={createProductImagesChange}  type="file" name="avatar" id=""  multiple />
                                                 </div>
                                           </div>
                                           <div className="order-button-payment mt-20">
                                     <button type="submit"  className="tp-btn">Post Ad</button>
                                  </div>
                                        </div>
                            </div>
                         </div>
                   </div>
                </form>
             </div>
           </section>:
           <>
          <center>   <div> Please <button>  <Link href={'/sign-in'}   >Login</Link>   </button>   </div>    </center>
           </>
          }   
        </>
    );
};

export default CheckoutArea;