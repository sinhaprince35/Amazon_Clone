import React from "react";
import "./cart.css";
import { Divider } from "@mui/material";

const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://cdn.cbeditz.com/cbeditz/large/girl-png-images-in-jeans-top-download-50qsj.png"
            alt="cart_img"
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Girls Top</h3>
          <h4>
            Divena Maroon Velvet hand work Kurta pant With Net Dupatta set
          </h4>
          <Divider />
          <p className="marp">M.R.P. ₹4,199</p>
          <p>
            Deal of the Day: <span style={{ color: "#B12704" }}>₹2,199</span>
          </p>
          <p>
            You Save: <span style={{ color: "#B12704" }}>₹2,000</span>
          </p>
          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>Extra 10% Off</span>
            </h5>
            <h4>
              Free Delivery{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 21</span>
              Details
            </h4>
            <p>
              Fastest Delivery :{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Item:
            <span
              style={{
                color: "#565959",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.4px",
              }}
            >
              The Molife Sense 500, a brilliant smartwatch with a beautiful
              large display. Say hello to the infinity 1.7-inch display with
              2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity,
              you wont have to keep waiting. Bring a change to your outfit every
              day with changeable straps. A splash of color every day keeps the
              boredom away.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
