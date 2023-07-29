import React, { useContext } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../Context/ContextProvider";

const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  console.log(account);
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navLogo">
            <NavLink to="/">
              {" "}
              <img src="./AmazonTL.png" alt="amazonLogo" />
            </NavLink>
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
            <NavLink to="/login">Sign in</NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={account?.carts?.length || 0} color="primary">
              <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
