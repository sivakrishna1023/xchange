import Link from "next/link";
import React from "react";
import { useState } from "react";

const cart_list = [
  {
    id: 1,
    img: "/assets/img/course/course-thumb-01.jpg",
    course_name: "Master Web Design in Adobe XD",
    price: "130.00",
    quantity: "",
    total: "",
  },
];

const CartArea = () => {



  const [product, setProduct] = useState(1)
  const plus = () => {
    setProduct(prev => prev + 1)
  }
  const minus = () => {
    if (product >= 1) {
      setProduct((prev) => prev - 1);
    }
  };

  return (
    <>
      <section
        className="cart-area pt-10 pb-100 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Courses</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart_list.map((item, i) => (
                        <tr key={i}>
                          <td className="product-thumbnail">
                            <Link href="/course-details">
                              <img src={item.img} alt="" />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href="/course-details">
                              {item.course_name}
                            </Link>
                          </td>
                          <td className="product-price">
                            <span className="amount">${item.price}</span>
                          </td>
                          <td className="product-quantity">
                            <span onClick={minus} className="cart-minus">-</span>
                            <input
                              className="cart-input"
                              type="text"
                              //   value="1"
                              placeholder={product}

                            />
                            <span onClick={plus} className="cart-plus">+</span>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">${item.price}</span>
                          </td>
                          <td className="product-remove">
                            <a href="#">
                              <i className="fa fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                          //   value=""
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button
                          className="tp-btn"
                          name="apply_coupon"
                          type="submit"
                        >
                          Apply coupon
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          className="tp-btn"
                          name="update_cart"
                          type="submit"
                        >
                          Update cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-5 ">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>$250.00</span>
                        </li>
                        <li>
                          Total <span>$250.00</span>
                        </li>
                      </ul>
                      <Link className="tp-btn" href="/check-out">
                        Proceed to checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartArea;
