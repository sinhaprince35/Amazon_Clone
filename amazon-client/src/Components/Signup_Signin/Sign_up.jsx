import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sign_up = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  console.log(udata);
  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };

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
                  onChange={adddata}
                  value={udata.fname}
                  name="fname"
                  id="fname"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.email}
                  name="email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input
                  type="text"
                  placeholder="Enter valid mobile number"
                  onChange={adddata}
                  value={udata.mobile}
                  name="mobile"
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  onChange={adddata}
                  value={udata.password}
                  name="password"
                  id="password"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password again</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.cpassword}
                  name="cpassword"
                  id="password"
                />
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
