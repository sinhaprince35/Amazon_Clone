import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navLogo">
            <img
              src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png"
              alt="amazonLogo"
            />
          </div>
          <div className="nav_searchbar">
            <input type="text" name="" id="" placeholder="Amazon search" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <a href="/">Sign in</a>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon" />
                      </Badge>
                      <p>Cart</p>
                  </div>
                  <Avatar className="avtar"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
