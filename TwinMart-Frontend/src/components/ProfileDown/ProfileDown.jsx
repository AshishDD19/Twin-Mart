import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { FaBoxOpen, FaKey, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const profileButtonStyle =
    "rounded-full cursor-pointer p-2 relative text-orange-400 overflow-hidden transition-colors duration-700 before:content-[''] before:absolute before:inset-0 before:bg-orange-400/20 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black hover:font-bold";

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {

    // localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));
    logout()
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full"
      >
        <div className={profileButtonStyle}>
          <FaUserCircle className="text-2xl" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-55 bg-white shadow-lg rounded-lg border border-gray-200 animate-fadeIn">
          
          {/* My Profile */}
          <button
            onClick={() => navigate("/userProfile")}
            className="flex items-center gap-3 w-full px-4 py-2 text-gray-800 hover:bg-orange-100 cursor-pointer"
          >
            <FaUser className="text-gray-700" />
            My Profile
          </button>

          {/* My Orders */}
          <button
            onClick={() => navigate("/orders")}
            className="flex items-center gap-3 w-full px-4 py-2 text-gray-800 hover:bg-orange-100 cursor-pointer"
          >
            <FaBoxOpen className="text-gray-700" />
            My Orders
          </button>

          {/* Change Password */}
          <button
            onClick={() => navigate("/changePassword")}
            className="flex items-center gap-3 w-full px-4 py-2 text-gray-800 hover:bg-orange-100 cursor-pointer"
          >
            <FaKey className="text-gray-700" />
            Change Password
          </button>

          {/* Logout */}
          <div className="px-4 py-2 bg-white">
            <button
              onClick={handleLogout}
              className="bg-amber-50 rounded-2xl border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full px-4 py-2 font-bold transition-colors duration-300 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
