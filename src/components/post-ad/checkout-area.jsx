'use client'
import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { Context } from '../Clients/clientcomponents';
import Link from 'next/link';
import imageCompression from 'browser-image-compression';
import { useLocationContext } from '@/src/utils/locationContext';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';


const formatResult = (item) => {
   return (
      <>
         {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
         <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
   )
}

const handleOnSearch = (string, results) => {
   // onSearch will have as the first callback parameter
   // the string searched and for the second the results.
   // console.log(string, results)
}


const CheckoutArea = () => {
   const { user } = useContext(Context);
   const [Category, setCategory] = useState('');
   const [vehicleType, setVehicleType] = useState('');
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
   const [verifymail, setverifymail] = useState('');
   const [loading, setloading] = useState(false);
   const [imagloading, setimagloading] = useState(false);
   const cities = [
      { id: 1, name: 'Miyapur' },
      { id: 2, name: 'JNTU College' },
      { id: 3, name: 'KPHB Colony' },
      { id: 4, name: 'Kukatpally' },
      { id: 5, name: 'Dr. B. R. Ambedkar Balanagar' },
      { id: 6, name: 'Moosapet' },
      { id: 7, name: 'Bharat Nagar' },
      { id: 8, name: 'Erragadda' },
      { id: 9, name: 'ESI Hospital' },
      { id: 41, name: 'S.R. Nagar' },
      { id: 10, name: 'Raidurg' },
      { id: 11, name: 'HITEC City' },
      { id: 12, name: 'Durgam Cheruvu' },
      { id: 13, name: 'Madhapur' },
      { id: 14, name: 'Peddamma Gudi' },
      { id: 15, name: 'Jubilee Hills Checks Post' },
      { id: 16, name: 'Jubilee Hills' },
      { id: 17, name: 'Yusufguda' },
      { id: 18, name: 'Madhura Nagar' },
      { id: 19, name: 'Ameerpet' },
      { id: 20, name: 'Kothapet' },
      { id: 21, name: 'Prashanthi Hills Nizampet' },
      { id: 22, name: 'L B Nagar' },
      { id: 23, name: 'Nizampet' },
      { id: 24, name: 'Adilabad' },
      { id: 25, name: 'Kumurambheem Asifabad' },
      { id: 26, name: 'Nirmal' },
      { id: 27, name: 'Mancherial' },
      { id: 28, name: 'Nizamabad' },
      { id: 29, name: 'Jagtial' },
      { id: 30, name: 'Peddapalli' },
      { id: 31, name: 'Kamareddy' },
      { id: 32, name: 'Rajanna Sircilla' },
      { id: 33, name: 'Karimnagar' },
      { id: 34, name: 'Jayashankar Bhupatpally' },
      { id: 35, name: 'Sangarreddy' },
      { id: 36, name: 'Medak' },
      { id: 37, name: 'Siddipet' },
      { id: 38, name: 'Hanumakonda' },
      { id: 39, name: 'Warangal Rural' },
      { id: 40, name: 'Mulugu' },
      { id: 41, name: 'Vikarabad' },
      { id: 42, name: 'Hyderabad' },
      { id: 43, name: 'Medchal Maikajgiri' },
      { id: 44, name: 'Jangaon' },
      { id: 45, name: 'Mahabubabad' },
      { id: 46, name: 'Bhadradri Knthagudem' },
      { id: 47, name: 'Narayanpet' },
      { id: 48, name: 'Mahabubnagar' },
      { id: 49, name: 'Rangareddy' },
      { id: 50, name: 'Yadadri Bhuvanagiri' },
      { id: 51, name: 'Suryapet' },
      { id: 52, name: 'Khanmmam' },
      { id: 53, name: 'Jogulamba Gadwal' },
      { id: 54, name: 'Wanaparthy' },
      { id: 55, name: 'Nagarkurnool' },
      { id: 56, name: 'Nalgonda' },
      { id: 57, name: 'Malakpet' },
      { id: 58, "name": "Panjagutta" },
  { id: 59, "name": "Irrum Manzil" },
  { id: 60, "name": "Khairatabad" },
  { id: 61, "name": "Lakdi-ka-pul" },
  { id: 62, "name": "Assembly" },
  { id: 63, "name": "Nampally" },
  { id: 64, "name": "Gandhi Bhavan" },
  { id: 65, "name": "Osmania Medical College" },
  { id: 66, "name": "MG Bus Station" },
  { id: 67, "name": "New Market" },
  { id: 68, "name": "Musarambagh" },
  { id: 69, "name": "Dilsukhnagar" },
  { id: 70, "name": "Chaitanyapuri" },
  { id: 71, "name": "Nagole" },
  { id: 72, "name": "Uppal" },
  { id: 73, "name": "Stadium" },
  { id: 74, "name": "NGRI" },
  { id: 75, "name": "Habsiguda" },
  { id: 76, "name": "Tarnaka" },
  { id: 77, "name": "Mettuguda" },
  { id: 78, "name": "Secunderabad" },
  { id: 79, "name": "Parade Ground" },
  { id: 80, "name": "Raipur" },
  { id: 81, "name": "Bhilai" },
  {id: 82, "name": "Durg" },
  { id: 83, "name": "Bilaspur" },
  { id: 84, "name": "Korba" },
  { id: 85, "name": "Naya Raipur" },
  { id: 86, "name": "Vishakapatnam" },
  { id: 87, "name": "Srikakulam" },
  { id: 88, "name": "Ichapuram" },
  { id: 89, "name": "Sompeta" },
  { id: 90, "name": "Palasa" },
  { id: 91, "name": "Tekkali" },
  { id: 92, "name": "Kotabommali" },
  { id:93, "name": "Budithi" },
  { id: 94, "name": "Narasannapeta" },
  { id: 95, "name": "Kotturu" },
  { id: 96, "name": "Paralakhemundi" },
  { id: 97, "name": "Seethampeta" },
  { id: 98, "name": "Palakonda" },
  { id: 99, "name": "Razam" },
  { id: 100, "name": "Ranasthalam" },
  { id: 101, "name": "Cheepuripalli" },
  { id: 102, "name": "Gajapatinagaram" },
  { id: 103, "name": "Vizianagaram" },
  { id: 104, "name": "Nellimarla" },
  { id: 105, "name": "Thagarapuvalasa" },
  { id: 106, "name": "Bheemunipatnam" },
  { id: 107, "name": "Madhurawada" },
  { id: 108, "name": "kothavalasa" },
  { id: 109, "name": "Chodavaram" },
  { id: 110,"name": "Anakapalle" },
  { id: 111, "name": "Yelamanchili"},
  { id: 112, "name": "Narsipatnam" },
  { id: 113, "name": "Kothakota" },
  { id: 114, "name": "Nakkapalle" },
  { id: 115, "name": "Tuni" },
  { id: 116, "name": "Annavaram" },
  { id: 117, "name": "Pithapuram" },
  { id: 118, "name": "Samalkot" },
  { id: 119, "name": "Kakinada" },
  { id: 120, "name": "Rajanagaram" },
  { id: 121, "name": "Korukonda" },
  { id: 122, "name": "Rajamundry" },
  { id: 123, "name": "Amalapuram" },
  { id: 124, "name": "Tanuku" },
  { id: 125, "name": "Tadepalligudem" },
  { id: 126, "name": "Nidadavole" },
  { id: 127, "name": "Dwaraka Tirumala" },
  { id: 128, "name": "Bhimavaram" },
  { id: 129, "name": "Eluru" },
  { id: 130, "name": "Gudivada" },
  { id: 131, "name": "Vijayawada" },
  { id: 132, "name": "Machilipatnam" },
  { id: 133, "name": "Guntur" },
  { id: 134, "name": "Narasaraopet" },
  { id: 135, "name": "Ongole" },
  { id: 136, "name": "Nellore" },
  { id: 137, "name": "Chirala" },
  { id: 138, "name": "Kadapa" },
  { id: 139, "name": "Tirupathi"},
  { id: 140, "name": "Nandyal" },
  { id: 141, "name": "Kurnool" },
  { id: 142, "name": "Anantapur"},
  { id: 143, "name": "Tadipatri" },
  { id: 144, "name": "Madanapalli" },
  { id: 145, "name": 'NIT Raipur' },
  { id: 146, "name": 'Noida' },      
  { id: 147, "name": "Mumbai" },
  { id: 148, "name": "Delhi" },
  { id: 149, "name": "Kolkata" },
  { id: 150, "name": "Chennai" },
  { id: 151, "name": "Bangalore" },
  { id: 152, "name": "Ahmedabad" },
  { id: 153, "name": "Pune" },
  { id: 154, "name": "Surat" },
  { id: 155, "name": "Jaipur" },
  { id: 156, "name": "Kanpur" },
  { id: 157, "name": "Lucknow" },
  { id: 158, "name": "Nagpur" },
  { id: 159, "name": "Ghaziabad" },
  { id: 160, "name": "Indore" }, 
  { id: 161, "name": "Coimbatore" },
  { id: 162, "name": "Kochi" },
  { id: 163, "name": "Patna" },
  { id: 164, "name": "Kozhikode" },
  { id: 165, "name": "Bhopal" },
  { id: 166, "name": "Thrissur" },
  { id: 167, "name": "Vadodara" },
  { id: 168, "name": "Agra" },
  { id: 169, "name": "Thiruvananthapuram" },
  { id: 170, "name": "Kannur" },
  { id: 171, "name": "Ludhiana" },
  { id: 172, "name": "Nashik" },  
  { id: 173, "name": "Madhurai" },
  { id: 174, "name": "Varanasi" },  
  { id: 175, "name": "Meerut" },
  { id: 176, "name": "Faridabad" },
  { id: 177, "name": "Rajkot" }     
   ];

   const handleOnSelect = (item) => {
      setCity(item.name);
      // console.log(City);
      // setSelectedCity(item.name);
      // setSelectedLocation(item.name);
   }
   const mobileBrands = [
      'Apple',
      'MI',
      'Samsung',
      'Vivo',
      'One plus',
      'Oppo',
      'Realme',
      'Motorola',
      'Lenovo',
      'Nokia',
      'Honor',
      'Google',
      'Poco',
      'Infinix',
      'Iqoo',
      'Nothing',
   ];
   const bikeBrands = [
      'Royal Enfield',
      'Aprilla',
      'Bajaj',
      'BMW',
      'Ducati',
      'Honda',
      'KTM',
      'Yamaha',
      'Hero',
      'TVS',
      'Kawasaki',
      'Harley Davidson',
      'Suzuki',
      'Jawa',
      'Benelli',
      'Triumph',
      'Ola',
      'Yezdi',
   ];
   const carBrands = [
      'Audi',
      'BMW',
      'Honda',
      'Hyundai',
      'Jeep',
      'Kia',
      'Chevrolet',
      'Mahindra',
      'Maruti Suzuki',
      'MG',
      'Toyota',
      'Volkswagen',
      'Nissan',
      'Renault',
      'Ford',
      'Tata',
      'Jaguar',
      'Porsche',
      'Land Rover',
   ];
   const handler = async () => {
      setloading(true);
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
               draft: false,
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
            setloading(false);
            setTimeout(() => {
               window.location.href = '/seller-profile';
            }, 1000);
         } else {
            setloading(false);
            const message = data.message ? data.message : "Failed to post Ad";
            toast.error(message, {
               position: toast.POSITION.TOP_CENTER
            });
         }
      } catch (error) {
         setloading(false);
         toast.error("Connection failed try again later !", {
            position: toast.POSITION.TOP_CENTER
         });
      }
   }

   const draft_handler = async () => {
      setloading(true);
      setdraft(true);
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
               draft: true,
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
            toast.success("Added to your Draft List...!!", {
               position: toast.POSITION.TOP_CENTER
            });
            setloading(false);
            setTimeout(() => {
               window.location.href = '/seller-profile';
            }, 1000);
         } else {
            setloading(false);
            const message = data.message ? data.message : "Failed to save in  draft!";
            toast.error(message, {
               position: toast.POSITION.TOP_CENTER
            });
         }
      } catch (error) {
         toast.error("Connection failed try again later !", {
            position: toast.POSITION.TOP_CENTER
         });
         setloading(false);
      }
   }
   const handle_verify_link = async () => {
      setloading(true);
      try {
         const token = localStorage.getItem('token');
         const res = await fetch(`/api/users/verifytoken`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
               email: verifymail,
            })
         })
         const data = await res.json();
         if (data.success) {
            toast.success("Verification Link has been sent to your mail", {
               position: toast.POSITION.TOP_CENTER
            });
            setloading(false);
         } else {
            console.log(data);
            toast.error("Unable to send Mail", {
               position: toast.POSITION.TOP_CENTER
            });
            setloading(false);
         }
      } catch (error) {
         toast.error("Connection failed try again later !", {
            position: toast.POSITION.TOP_CENTER
         });
         setloading(false);
      }
   }
   const handleRemoveImage = (indexToRemove) => {
      const updatedImages = images.filter((_, index) => index !== indexToRemove);
      setImages(updatedImages);
   };
   const creatingAdimages = async (e) => {
      const files = Array.from(e.target.files);
      setimagloading(true);
      for (const file of files) {
         const originalImage1 = file
         if (originalImage1.size > 1024 * 1024) {
            toast.error(`This image exceeds the limit 1MB`, {
               position: toast.POSITION.TOP_CENTER
            });
            continue;
         }
         try {
            const originalImage = file;
            if (originalImage.size < 100 * 1024) {
               var reader = new FileReader();
               reader.readAsDataURL(originalImage);
               reader.onload = () => {
                  setImages((old) => [...old, reader.result]);
               }
               reader.onerror = (error) => {
                  console.log('Error in uploading the Images...!!', error);
               }
               continue;
            }

            if (originalImage.size > 5 * 1024 * 1024) {
               const options = {
                  maxSizeMB: 0.01,
                  useWebWorker: true,
               };
               const compressedFile = await imageCompression(originalImage, options);
               var reader = new FileReader();
               reader.readAsDataURL(compressedFile);
               reader.onload = () => {
                  setImages((old) => [...old, reader.result]);
               }
               reader.onerror = (error) => {
                  console.log('Error in uploading the Images...!!', error);
               }
            } else if (originalImage.size >= 100 * 1024 && originalImage.size <= 5 * 1024 * 1024) {
               const options = {
                  maxSizeMB: 0.01,
                  useWebWorker: true,
               };
               const compressedFile = await imageCompression(originalImage, options);
               var reader = new FileReader();
               reader.readAsDataURL(compressedFile);
               reader.onload = () => {
                  setImages((old) => [...old, reader.result]);
               }
               reader.onerror = (error) => {
                  console.log('Error in uploading the Images...!!', error);
               }
            }
         } catch (error) {
            console.error('Compression error:', error);
         }
      }
      setimagloading(false);
   };
   if (loading === true) {
      return (
         <>
            <ToastContainer />
            <center> <h3>Please wait...</h3>   </center>
         </>
      )
   }
   const { selectedLocation, setSelectedLocation } = useLocationContext();
   return (
      <>
         <ToastContainer />

         {/* <center> <br /> <br />
            {user && !user.isverified ? <div>
               <div className="col-md-3">
                  <div className="checkout-form-list">
                     <label> Please get verified to continue  <span className="required">*</span></label>
                     <input onChange={(e) => { setverifymail(e.target.value) }} type="text" placeholder="Please Enter Email to verify" />
                  </div>

               </div>
               <div className="col-md-2">
                  <div className="order-button-payment mt-20">
                     <button onClick={handle_verify_link} className="tp-btn">Get Link</button>
                  </div>
               </div>
            </div> : <div> </div>}
         </center>  <br /> */}

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
                                    <input required onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Address<span className="required">*</span></label>
                                    <input required onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder="Street/Village" />
                                 </div>
                              </div>

                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label >
                                       Town / City <span className="required">*</span>
                                       <div style={{ width: '100%', marginTop: 30 }}>
                                          <ReactSearchAutocomplete
                                             items={cities}
                                             onSearch={handleOnSearch}
                                             onSelect={handleOnSelect}
                                             autoFocus
                                             formatResult={formatResult}
                                             placeholder="Enter Your City Here"
                                          />
                                       </div>
                                    </label>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>State <span className="required">*</span></label>
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
                                    <label>Phone (Used for contact purposes) <span className="required">*</span> </label>
                                    <input required onChange={(e) => { setphone(e.target.value) }} type="text" placeholder="Enter number without (+91)" />
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
                              <div className="col-md-12">
                                 <div className="country-select">
                                    {Category === 'Vehicles' && (
                                       <>
                                          <label>Vehicle Type</label>
                                          <select
                                             required
                                             value={vehicleType}
                                             onChange={(e) => setVehicleType(e.target.value)}
                                          >
                                             <option value="">Select</option>
                                             <option value="2-Wheeler">2-Wheeler</option>
                                             <option value="4-Wheeler">4-Wheeler</option>
                                          </select>
                                       </>
                                    )}
                                 </div>
                              </div>

                              <div className="col-md-6">
                                 <div className="country-select">
                                    <label style={{ width: "100%" }}>Brand <span className="required">*</span></label>
                                    {Category === 'Mobiles' ? (
                                       <select
                                          required
                                          value={Brand}
                                          onChange={(e) => setBrand(e.target.value)}
                                          style={{ padding: "15px 20px", width: "100%" }}
                                       >
                                          <option value="">Select</option>
                                          {mobileBrands.map((mobileBrand) => (
                                             <option key={mobileBrand} value={mobileBrand}>
                                                {mobileBrand}
                                             </option>
                                          ))}
                                          <option value="Other">Other</option>
                                       </select>
                                    ) : Category === 'Vehicles' ? (
                                       <select
                                          required
                                          value={Brand}
                                          onChange={(e) => setBrand(e.target.value)}
                                          style={{ padding: "15px 20px", width: "100%" }}
                                       >
                                          <option value="">Select</option>
                                          {vehicleType === '2-Wheeler'
                                             ? bikeBrands.map((bikeBrand) => (
                                                <option key={bikeBrand} value={bikeBrand}>
                                                   {bikeBrand}
                                                </option>
                                             ))
                                             : vehicleType === '4-Wheeler'
                                                ? carBrands.map((carBrand) => (
                                                   <option key={carBrand} value={carBrand}>
                                                      {carBrand}
                                                   </option>
                                                ))
                                                : null}
                                          <option value="Other">Other</option>
                                       </select>
                                    ) : (
                                       <input required onChange={(e) => { setBrand(e.target.value) }} type="text" placeholder="Enter" />
                                    )}
                                 </div>
                              </div>

                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Ad Name <span className="required">*</span></label>
                                    <input required onChange={(e) => { setAdname(e.target.value) }} type="text" placeholder=" Ad Name" />
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
                                    <input style={{ padding: "10px 20px" }} required onChange={(e) => { setAdprice(e.target.value) }} type="text" placeholder="Ad Price" />
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
                                    <select required onClick={(e) => { setNegotable(e.target.value) }} >
                                       <option value="Yes">select</option>
                                       <option value="Yes">Yes</option>
                                       <option value="Noo">No</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Upload Photo<span className="required">*</span></label>
                                    <label>Make sure size of each image Less than 1MB</label>
                                    <input onChange={creatingAdimages} type="file" accept='image/*' />
                                 </div>
                                 <div>
                                    {
                                       imagloading ? (
                                          <p> Proceesing... </p>
                                       ) : (
                                          images == "" || images == null ? "" : images.map((data, index) => {
                                             return (
                                                <div style={{ position: "relative", display: "inline-block" }}>
                                                   <img width={100} height={100} src={data} />
                                                   <div onClick={() => handleRemoveImage(index)} style={{
                                                      position: "absolute",
                                                      top: "-10px", right: "-10px",
                                                      cursor: "pointer",
                                                      padding: "1px 10px",
                                                      color: "red",
                                                      backgroundColor: "white",
                                                      borderRadius: "100%",
                                                      fontSize: "20px",
                                                      fontWeight: "bolder"
                                                   }}>x</div>
                                                </div>
                                             )
                                          })
                                       )
                                    }
                                 </div>
                              </div>
                              <div className="order-button-payment mt-20">
                                 <button onClick={handler} className="tp-btn">Post Ad</button>
                              </div>
                              <div className="order-button-payment mt-20">
                                 <button onClick={draft_handler} className="tp-btn">Save as Draft</button>
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

export default CheckoutArea;
