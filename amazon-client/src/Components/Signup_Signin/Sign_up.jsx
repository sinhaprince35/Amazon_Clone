import React from "react";
import { NavLink } from "react-router-dom";

const Sign_up = () => {
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogo.png" alt="amazonlogo" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Create account</h1>
              <div className="form_data">
                <label htmlFor="fname">Your name</label>
                <input
                  type="text"
                  placeholder="First and last name"
                  name="fname"
                  id="fname"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input
                  type="text"
                  placeholder="Enter valid mobile number"
                  name="mobile"
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  name="password"
                  id="password"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password again</label>
                <input type="password" name="password" id="password" />
              </div>
                          <button className="signin_btn">Continue</button>
                          <div className="signin_info">
                              <p>Already have an account?</p>
                              <NavLink to="/login">Sign in</NavLink>
                          </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_up;
