import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiMapPinLine, RiShoppingCartLine } from "react-icons/ri";
import { FaCaretDown, FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import ProfileDropdown from "../ProfileDown/ProfileDown";
import Location from "../Location/Location";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishListContext";
import { useAuth } from "../../context/AuthContext";

const Navbar = ({ location, getLocation }) => {
  // const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const { cartItem } = useCart()
  const { wishlistItem } = useWishlist()
   const { user } = useAuth();
  const loggedIn = !!user;



  const buttonStyle =
    "rounded-full p-2 relative text-orange-400 overflow-hidden transition-colors duration-700 before:content-[''] before:absolute before:inset-0 before:bg-orange-400/20 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black  cursor-pointer";

  const linkStyle =
    "relative text-black font-semibold dark:text-light after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:rounded-2xl after:w-0 after:bg-orange-400 after:transition-all after:duration-700 hover:after:w-full";

  const loginButtonStyle =
    "rounded-3xl relative font-bold px-6 py-2 border border-orange-400 text-orange-400 overflow-hidden transition-colors duration-700 before:content-[''] before:absolute before:inset-0 before:bg-orange-400/60 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black hover:font-bold cursor-pointer";

  return (
    <nav className="navbar flex justify-between items-center px-6 py-3 bg-white shadow">
      {/* Logo */}
      <div className="nav-logo flex items-center">
        <Link to={loggedIn ? "/dashboard" : "/"}>
          <img
            src="/images/cartLogo.png"
            alt="TwinCart Logo"
            className="border-2 border-black w-12 h-12 rounded-full"
          />
        </Link>
      </div>

      {/* Location */}

      <Location location={location} getLocation={getLocation} />



      {/* Links */}
      <ul className="nav-links flex gap-6 items-center">
        <li className={linkStyle}>
          <Link to={loggedIn ? "/dashboard" : "/"}>Home</Link>
        </li>
        <li className={linkStyle}>
          <Link to="/product">Products</Link>
        </li>
        <li className={linkStyle}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={linkStyle}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-6">
        {/* Search bar */}
        <div className="group relative hidden sm:block">
          <input
            type="text"
            placeholder="Search Products..."
            className="h-[50px] w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 ease-in-out rounded-full border border-orange-300 px-2 py-1 focus:outline-none focus:border-2 focus:border-orange-400"
          />
          <IoMdSearch className="text-gray-500 group-hover:text-orange-400 absolute top-1/2 -translate-y-1/2 right-3 text-2xl" />
        </div>

        {/* Wishlist  */}
        <Link to={'/wishlist'}>
          <button className={buttonStyle} aria-label="Wishlist">
            <FaRegHeart className="text-2xl" />
            {wishlistItem.length > 0 ? <span className="text-[10px] bg-orange-500 px-1 rounded-full absolute top-1 right-1  text-white">{wishlistItem.length} </span>
              : ""
            }
          </button>
        </Link>

        {/* Cart  */}
        <Link to={'/cart'}>
          <button className={buttonStyle} aria-label="Cart">
            <RiShoppingCartLine className="text-2xl hover:font-bold" />
            {cartItem.length > 0 ? <span className="text-[10px] bg-orange-500 px-1 rounded-full absolute top-1 right-1  text-white">{cartItem.length} </span>
              : ""
            }
          </button>
        </Link>

        {/* Login/Profile */}
        {loggedIn  ? (
          <ProfileDropdown />
        ) : (
          <div className="nav-actions cursor-pointer">
            <Link to="/login">
              <button className={loginButtonStyle}>Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
