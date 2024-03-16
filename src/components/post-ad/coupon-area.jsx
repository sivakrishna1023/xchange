import React, { useState } from 'react';

const CouponArea = () => {
   const [isLogin, setIsLogin] = useState(false)
   const [isCoupon, setIsCoupon] = useState(false)
   return (
      <>
         <section className="coupon-area pt-10 pb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="coupon-accordion">
                        {/* <!-- ACCORDION START --> */}
                        <h3>Returning customer ? <span id="showlogin" onClick={() => setIsLogin(!isLogin)}>Click here to login</span></h3>
                        {
                           isLogin &&
                           <div id="checkout-login" className={`coupon-content ${isLogin ? "d-block" : ""}`}>
                              <div className="coupon-info">
                                 <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                                    sit amet ipsum luctus.</p>
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <p className="form-row-first">
                                       <label>Username or email <span className="required">*</span></label>
                                       <input type="text" />
                                    </p>
                                    <p className="form-row-last">
                                       <label>Password <span className="required">*</span></label>
                                       <input type="text" />
                                    </p>
                                    <p className="form-row">
                                       <button className="tp-btn-3" type="submit">Login</button>
                                       <label>
                                          <input type="checkbox" />
                                          {" "} Remember me
                                       </label>
                                    </p>
                                    <p className="lost-password">
                                       <a href="#">Lost your password?</a>
                                    </p>
                                 </form>
                              </div>
                           </div>
                        }
                        {/* <!-- ACCORDION END --> */}
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="coupon-accordion">
                        {/* <!-- ACCORDION START --> */}
                        <h3>Have a coupon ? <span id="showcoupon" onClick={() => setIsCoupon(!isCoupon)}>Click here to enter your code</span></h3>

                        {
                           isCoupon &&
                           <div id="checkout_coupon" className={`coupon-checkout-content ${isCoupon ? "d-block" : ""}`}>
                              <div className="coupon-info">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <p className="checkout-coupon">
                                       <input type="text" placeholder="Coupon Code" />
                                       <button className="tp-btn-3" type="submit">Apply Coupon</button>
                                    </p>
                                 </form>
                              </div>
                           </div>
                        }
                        {/* <!-- ACCORDION END --> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CouponArea;