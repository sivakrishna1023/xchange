'use client'
import React, {useState,useContext,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Spinner} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { Context } from '../Clients/clientcomponents';
import Link from 'next/link';
// import Compressor from 'compressorjs'; 
import imageCompression from 'browser-image-compression';
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
   const [draft,setdraft]=useState(false);
   const [country,setcountry]=useState('');
   const [Name,setName]=useState('');
   const [Address,setAddress]=useState('');
   const [City,setCity]=useState('');
   const [state,setstate]=useState('');
   const [postcode,setpostcode]=useState('');
   const [email,setemail]=useState('');
   const [phone,setphone]=useState('');
   const [images, setImages] = useState([]);
   const [verifymail,setverifymail]=useState('');
   const [loading,setloading]=useState(false);
   const handler=async()=>{
      setloading(true);
         try{
               const token = localStorage.getItem('token');
               const res=await fetch(`/api/ads/Newads`,{
                  method:'POST',
                  headers: {
                     'Content-Type': 'application/json' ,
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
                     draft:false,
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
               toast.success("Your new Ad created", {
                  position: toast.POSITION.TOP_CENTER
                });
               setloading(false);
                setTimeout(() => {
                  window.location.href = '/seller-profile';
                }, 1000); 
            }else{
               setloading(false);
               toast.error("Failed to post Ad !", {
                  position: toast.POSITION.TOP_CENTER
                });
            }
         }catch(error){
            setloading(false);
             toast.error("Connection failed try again later !", {
               position: toast.POSITION.TOP_CENTER
             });
         }
   }
  
   const draft_handler= async()=>{
         setloading(true);
         setdraft(true);
            try{
               const token = localStorage.getItem('token');
               const res=await fetch(`/api/ads/Newads`,{
                  method:'POST',
                  headers: {
                     'Content-Type': 'application/json' ,
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
                     draft:true,
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
               toast.success("Added to your Draft List...!!", {
                  position: toast.POSITION.TOP_CENTER
               });
               setloading(false);
               setTimeout(() => {
                  window.location.href = '/seller-profile';
                }, 1000);
            }else{
               setloading(false);
               toast.error("Failed to save in  draft!", {
                  position: toast.POSITION.TOP_CENTER
               });
            }
         }catch(error){
            toast.error("Connection failed try again later !", {
               position: toast.POSITION.TOP_CENTER
            });
            setloading(false);
         }
   }
   const handle_verify_link= async ()=>{
      setloading(true);
      try{
         const token = localStorage.getItem('token');
         const res=await fetch(`/api/users/verifytoken`,{
            method:'POST',
            headers: {
               'Content-Type': 'application/json' ,
               'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
               email:verifymail,
            })
         })
      const data= await res.json();
      if(data.success){
         toast.success("Verification Link has been sent to your mail", {
            position: toast.POSITION.TOP_CENTER
         });
         setloading(false);
      }else{
         console.log(data);
         toast.error("Unable to send Mail", {
            position: toast.POSITION.TOP_CENTER
         });
         setloading(false);
      }
   }catch(error){
      toast.error("Connection failed try again later !", {
         position: toast.POSITION.TOP_CENTER
      });
      setloading(false);
   }
}
const creatingAdimages = async (e) => {
   const files = Array.from(e.target.files);
 
   for (const file of files) {
     try {
       const originalImage = file;
       console.log('originalFile size', originalImage.size / 1024, 'KB');
 
       if (originalImage.size < 100 * 1024) {
         // If image size is already smaller than 100 KB, use the original image
         console.log('Image is already smaller than 100 KB. Using original image.');
         var reader=new FileReader();
             reader.readAsDataURL(originalImage);
               reader.onload=()=>{
                  setImages((old)=>[...old,reader.result]);
              }
              reader.onerror=(error)=>{
                   console.log('Error in uploading the Images...!!',error);
              }
         // const imageUrl = URL.createObjectURL(originalImage);
         // setImages((old) => [...old, imageUrl]); // Add original image to the state
         continue; // Move to the next file
       }
 
       if (originalImage.size > 5 * 1024 * 1024) {
         // If image size is greater than 5 MB, compress to 100 KB
         console.log('Image is larger than 5 MB. Compressing to 100 KB.');
         const options = {
           maxSizeMB: 0.1, // Set the maximum size to 0.1 MB (100 KB)
           useWebWorker: true,
         };
 
         const compressedFile = await imageCompression(originalImage, options);
         // console.log('compressedFile size', compressedFile.size / 1024, 'KB');
         
         // const compressedImageUrl = URL.createObjectURL(compressedFile);
         var reader=new FileReader();
         reader.readAsDataURL(compressedFile);
           reader.onload=()=>{
              setImages((old)=>[...old,reader.result]);
          }
          reader.onerror=(error)=>{
               console.log('Error in uploading the Images...!!',error);
          }
         // setImages((old) => [...old, compressedImageUrl]); // Add compressed image to the state
       } else if (originalImage.size >= 100 * 1024 && originalImage.size <= 5 * 1024 * 1024) {
         // If image size is between 100 KB and 5 MB, compress to 100 KB
         console.log('Image is between 100 KB and 5 MB. Compressing to 100 KB.');
         const options = {
           maxSizeMB: 0.1, // Set the maximum size to 0.1 MB (100 KB)
           useWebWorker: true,
         };
 
         const compressedFile = await imageCompression(originalImage, options);
         // console.log('compressedFile size', compressedFile.size / 1024, 'KB');
         var reader=new FileReader();
         reader.readAsDataURL(compressedFile);
           reader.onload=()=>{
              setImages((old)=>[...old,reader.result]);
          }
          reader.onerror=(error)=>{
               console.log('Error in uploading the Images...!!',error);
          }
         // const compressedImageUrl = URL.createObjectURL(compressedFile);
         // setImages((old) => [...old, compressedImageUrl]); // Add compressed image to the state
       }
     } catch (error) { 
       console.error('Compression error:', error);
     }
   }
 };


const creatingAdimages2 = (e) => {
   const files = Array.from(e.target.files);
 
   files.forEach((file) => {
     const reader = new FileReader();
     reader.onload = (event) => {
       const image = new Image();
       image.src = event.target.result;
 
       image.onload = () => {
         const canvas = document.createElement('canvas');
         let width = image.width;
         let height = image.height;
         canvas.width = width;
         canvas.height = height;
 
         const ctx = canvas.getContext('2d');
         ctx.drawImage(image, 0, 0, width, height);
 
         const compressedImages = {
           jpeg: [
             canvas.toDataURL('image/jpeg', 0.1),
             canvas.toDataURL('image/jpeg', 0.5),
             // ... (other quality levels for JPEG)
           ],
           png: [
             canvas.toDataURL('image/png', 0.1),
             canvas.toDataURL('image/png', 0.7),
             // ... (other quality levels for PNG)
           ],
         };
 
         let selectedImage = event.target.result;
         console.log(selectedImage.length);
 
         // JPEG Compression
         for (let i = 0; i < compressedImages.jpeg.length; i++) {
           if (compressedImages.jpeg[i].length <= 100 * 1024) {
             selectedImage = compressedImages.jpeg[i];
           } else {
             break;
           }
         }
 
         // If JPEG compression didn't meet size requirement, try PNG compression
         if (selectedImage.length > 100 * 1024) {
           for (let i = 0; i < compressedImages.png.length; i++) {
             if (compressedImages.png[i].length <= 100 * 1024) {
               selectedImage = compressedImages.png[i];
               break;
             }
           }
         }
         console.log(selectedImage.length);
         setImages((old) => [...old, selectedImage]);
         // Perform the necessary action with selectedImage (e.g., setImages)
       };
     };
     reader.readAsDataURL(file);
   });
 };
 
 async function handleImageUpload(event) {

   const imageFile = event.target.files[0];
   console.log('originalFile instanceof Blob', imageFile instanceof Blob); 
   console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

   const options = {
     maxSizeMB: 1,
     useWebWorker: true
   }
   try {
     const compressedFile = await imageCompression(imageFile, options);
     console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); 
     console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); 
     await uploadToServer(compressedFile); // write your own logic
   } catch (error) {
     console.log(error);
   }

 }
const creatingAdimages1 = (e) => {
   const files = Array.from(e.target.files);
 
   files.forEach((file) => {
     const reader = new FileReader();
     reader.onload = (event) => {
       const image = new Image();
       image.src = event.target.result;
 
       image.onload = () => {
         const canvas = document.createElement('canvas');
         let width = image.width;
         let height = image.height;
         canvas.width = width;
         canvas.height = height;
 
         const ctx = canvas.getContext('2d');
         ctx.drawImage(image, 0, 0, width, height);

         const compressedImages = [
           canvas.toDataURL('image/jpeg', 0.1),
           canvas.toDataURL('image/jpeg', 0.2),
           canvas.toDataURL('image/jpeg', 0.3),
           canvas.toDataURL('image/jpeg', 0.4),
           canvas.toDataURL('image/jpeg', 0.5),
           canvas.toDataURL('image/jpeg', 0.6),
           canvas.toDataURL('image/jpeg', 0.7),
           canvas.toDataURL('image/jpeg', 0.8),
           canvas.toDataURL('image/jpeg', 0.9),
         ];
         let selectedImage = event.target.result;
         console.log(selectedImage.length);
         for (let i = 0; i < compressedImages.length; i++) {
           if (compressedImages[i].length <= 100 * 1024) {
             selectedImage = compressedImages[i];
           } else {
             break;
           }
         }
         console.log(selectedImage.length);
         setImages((old) => [...old, selectedImage]);
       };
     };
     reader.readAsDataURL(file);
   });
 };
   // const creatingAdimages=(e)=>{
   //    const files=Array.from(e.target.files);
   //    files.forEach((file)=>{
   //       var reader=new FileReader();
   //       reader.readAsDataURL(file);
   //       reader.onload=()=>{
   //          setImages((old)=>[...old,reader.result]);
   //       }
   //       reader.onerror=(error)=>{
   //          console.log('Error in uploading the Images...!!',error);
   //       }
   //    })
   // }
   if(loading===true){
      return(
         <> 
         <center> <h3>Please wait...</h3>   </center>
         </>
       )
   }
    return (
        <>
         <ToastContainer />
         
            <center> <br /> <br /> 
            { user && !user.isverified ? <div>
                             <div className="col-md-3">
                                             <div className="checkout-form-list">
                                                <label> Please get verified to continue  <span className="required">*</span></label>
                                                <input onChange={(e)=>{setverifymail(e.target.value)}}  type="text" placeholder="Please Enter Email to verify" />
                                             </div>

                                       </div>
                             <div className="col-md-2">
                              <div className="order-button-payment mt-20">
                                 <button  onClick={handle_verify_link}className="tp-btn">Get Link</button>
                              </div>
                              </div>
                  </div> : <div> </div> }
           </center>  <br />
         
          {
             user._id ? <section className="checkout-area pt-50 pb-70 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
             <div className="container">
                   <div className="row">
                         <div className="col-lg-6 col-md-12">
                            <div className="checkbox-form">
                               <h3>Address</h3>
                               <div className="row">
                                     <div className="col-md-12">
                                        <div className="country-select">
                                           <label>Country<span className="required">*</span></label>
                                           <select required onClick={(e)=>{setcountry(e.target.value)}}  >
                                                 <option value="India">select</option>
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
                                           <label>Phone (Used for contact purposes) <span className="required">*</span> </label>
                                           <input  required onChange={(e)=>{setphone(e.target.value)}}  type="text" placeholder="Enter number without (+91)" />
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
                                                    <select  required onClick={(e)=>{setCategory(e.target.value)}}   >
                                                    <option value="Mobiles">Select</option>
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
                                                    <input  required onChange={(e)=>{setAdprice(e.target.value)}}  type="number" placeholder="Ad Price" />
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
                                                       <option value="Good">Select</option>
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
                                                      <option value="Yes">select</option>
                                                       <option value="Yes">Yes</option>
                                                       <option value="Noo">No</option>
                                                    </select>
                                                 </div>
                                           </div>
                                           <div className="col-md-12">
                                                 <div className="country-select">
                                                    <label>Upload Photo<span className="required">*</span></label>
                                                    <input onChange={creatingAdimages}  type="file" accept='image/*'  />
                                                 </div> 
                                                 {images=="" || images==null ? "": images.map(data=>{
                                                   return(  <img width={100} height={100} src={data}/>  )
                                                         })  }
                                           </div>
                                           <div className="order-button-payment mt-20">
                                     <button  onClick={handler} className="tp-btn">Post Ad</button>
                                  </div>
                                  <div className="order-button-payment mt-20">
                                     <button  onClick={draft_handler}className="tp-btn">Save as Draft</button>
                                  </div>
                                        </div>
                            </div>
                         </div>
                   </div>
                
             </div>
           </section>:
           <>
          <center>   <div> Please <button>  <Link href={'/sign-in'}  >Login</Link>   </button>   </div>    </center>
           </>
          }   
        </>
    );
};

export default CheckoutArea;