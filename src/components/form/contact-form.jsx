import React,{useState} from "react";

const ContactForm = () => {
  const [email,setemail]=useState('');
  const [name,setname]=useState('');
  const [message,setmessage]=useState('');
  const sendmessage= async()=>{
    try{
        const res= await fetch('/api/users/feedback',{
         method:'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
          email,
          name,
          message,
         })
        })
        const data=await res.json();
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <section
        className="contact-area pb-60 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="contact-wrapper mr-65 mb-60">
                <div className="sub-contact-title">
                  <h5 className="contact-title mb-30">Send Us Message</h5>
                </div>
                <div className="contact-form">
                  <form
                    id="contact-form"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-form-input mb-25">
                          <span>Name</span>
                          <input
                            type="name"
                            placeholder="Your Name"
                            name="name"
                            required
                            onChange={(e)=>{setname(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-form-input mb-25">
                          <span>Email Id</span>
                          <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            required
                            onChange={(e)=>{setemail(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="contact-form-input mb-40">
                          <span>Comments</span>
                          <textarea
                            placeholder="Enter Your Message"
                            name="message"
                            required
                            onChange={(e)=>{setmessage(e.target.value)}}
                          ></textarea>
                        </div>
                        <button onClick={sendmessage} className="tp-btn" type="submit">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="ajax-response"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="contact-bg mb-60">
                <img
                  src="/assets/img/bg/contact-sub-bg-01.png"
                  alt="contact-bg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
