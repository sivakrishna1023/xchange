'use client'
import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { Context } from '../Clients/clientcomponents';
import Link from 'next/link';

const Check = () => {
   const { user } = useContext(Context);
   const [Category, setCategory] = useState('');
   const [Adname, setAdname] = useState('');
   const [Brand, setBrand] = useState('');
   const [Model, setModel] = useState('');
   const [Description, setDescription] = useState('');
   const [Adprice, setAdprice] = useState('');
   const [Features, setFeatures] = useState('');
   const [Condition, setCondition] = useState('');
   const [Negotable, setNegotable] = useState('');
   const [draft, setdraft] = useState(false);
   const [country, setcountry] = useState('');
   const [Name, setName] = useState('');
   const [Address, setAddress] = useState('');
   const [City, setCity] = useState('');
   const [state, setstate] = useState('');
   const [postcode, setpostcode] = useState('');
   const [email, setemail] = useState('');
   const [phone, setphone] = useState('');
   const [images, setImages] = useState([]);
   const handler = async () => {
      try {
         const token = localStorage.getItem('token');
         const res = await fetch(`/api/ads/Newads`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
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
               draft,
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
         const data = await res.json();
         if (data.success) {
            toast.success("Your new Ad created", {
               position: toast.POSITION.TOP_CENTER
            });
         } else {
            console.log(data);
            toast.error("Failed to post Ad !", {
               position: toast.POSITION.TOP_CENTER
            });
         }
      } catch (error) {
         toast.error("Connection failed try again later !", {
            position: toast.POSITION.TOP_CENTER
         });
         console.log(error);
      }
   }
   const creatingAdimages = (e) => {
      const files = Array.from(e.target.files);
      files.forEach((file) => {
         var reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => {
            setImages((old) => [...old, reader.result]);
         }
         reader.onerror = (error) => {
            console.log('Error in uploading the Images...!!', error);
         }
      })
   }
   return (
      <>
         <ToastContainer />
         {
            user._id ? <section className="checkout-area pt-10 pb-70 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
               <div className="container">

                  <div className="row">
                     <div className="col-lg-6 col-md-12">
                        <div className="checkbox-form">
                           <h3>Address</h3>
                           <div className="row">
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Country<span className="required">*</span></label>
                                    <select required onClick={(e) => { setcountry(e.target.value) }}  >
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
                                    <input required onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Address <span className="required">*</span></label>
                                    <input required onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder="Street address" />
                                 </div>
                              </div>

                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Town / City <span className="required">*</span></label>
                                    <input required onChange={(e) => { setCity(e.target.value) }} type="text" placeholder="Town / City" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>State / County <span className="required">*</span></label>
                                    <input required onChange={(e) => { setstate(e.target.value) }} type="text" placeholder="State" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Postcode / Zip <span className="required">*</span></label>
                                    <input required onChange={(e) => { setpostcode(e.target.value) }} type="text" placeholder="Postcode / Zip" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Email Address <span className="required">*</span></label>
                                    <input required onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="Enter" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Phone <span className="required">*</span></label>
                                    <input required onChange={(e) => { setphone(e.target.value) }} type="text" placeholder="Postcode / Zip" />
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="your-order mb-30 ">
                           <h3>About Ad</h3>
                           <div className="row">
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Category <span className="required">*</span></label>
                                    <select required onClick={(e) => { setCategory(e.target.value) }}   >
                                       <option value="select">Select</option>
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
                                    <input required onChange={(e) => { setAdname(e.target.value) }} type="text" placeholder=" Ad Name" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Brand <span className="required">*</span></label>
                                    <input required onChange={(e) => { setBrand(e.target.value) }} type="text" placeholder="Enter" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Model</label>
                                    <input required onChange={(e) => { setModel(e.target.value) }} type="text" placeholder="Enter" />
                                 </div>
                              </div>
                              <div className="order-notes">
                                 <div className="checkout-form-list">
                                    <label>Ad Description</label>
                                    <textarea required onChange={(e) => { setDescription(e.target.value) }} id="checkout-mess" cols="30" rows="10"
                                       placeholder="Notes about your ad, e.g. special notes for delivery."></textarea>
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Ad Price <span className="required">*</span></label>
                                    <input required onChange={(e) => { setAdprice(e.target.value) }} type="number" placeholder="Ad Price" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Features<span className="required">*</span></label>
                                    <input required onChange={(e) => { setFeatures(e.target.value) }} type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Condition <span className="required">*</span></label>
                                    <select required onClick={(e) => { setCondition(e.target.value) }}  >
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
                                    <select required onClick={(e) => { setNegotable(e.target.value) }} >
                                       <option value="Yes">Yes</option>
                                       <option value="Noo">No</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Upload Photo<span className="required">*</span></label>
                                    <input onChange={creatingAdimages} type="file" accept='image/*' />
                                 </div>
                                 {images == "" || images == null ? "" : images.map(data => {
                                    return (<img width={100} height={100} src={data} />)
                                 })}
                              </div>
                              <div className="order-button-payment mt-20">
                                 <button onClick={handler} className="tp-btn">Post Ad</button>
                              </div>
                              <div className="order-button-payment mt-20">
                                 <button onClick={() => { setdraft(true) }} className="tp-btn">Save as Draft</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </section> :
               <>
                  <center>   <div> Please <button>  <Link href={'/sign-in'}  >Login</Link>   </button>   </div>    </center>
               </>
         }
      </>
   );
};

export default Check;