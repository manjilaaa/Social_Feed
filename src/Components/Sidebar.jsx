import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoIosLogOut, IoIosHome, IoIosAdd } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
  }, []);

  const handleLogout = () => {
    const confirm = window.confirm("Are you sure you want to logout?");
    if (confirm) {
      localStorage.removeItem("userEmail");
      navigate("/");
    }
  };

  return (
    <div className="w-64 bg-gradient-to-b from-purple-100 to-pink-100 shadow-lg h-screen p-6 flex flex-col relative border-r border-purple-200">
   
      <div className="mb-10 mt-4">
        <h1 className="text-2xl font-bold text-purple-700 text-center">SocialFeed</h1>
        <p className="text-xs text-purple-500 text-center">Share your moments</p>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3">
          <li>
            <Link 
              to="/post" 
              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-purple-500 hover:text-white transition-all duration-300 group"
            >
              <IoIosHome className="mr-3 text-purple-500 group-hover:text-white" size={20} />
              <span className="font-medium">Feed</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/add" 
              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-purple-500 hover:text-white transition-all duration-300 group"
            >
              <IoIosAdd className="mr-3 text-purple-500 group-hover:text-white" size={24} />
              <span className="font-medium">Add Post</span>
            </Link>
          </li>
          
        </ul>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-purple-200 pt-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
            {userEmail ? userEmail.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-700 truncate max-w-[120px]">{userEmail}</p>
          </div>
        </div>
        <button
          title="logout"
          className="text-purple-600 hover:text-purple-800 p-2 rounded-full hover:bg-purple-100 transition-colors duration-300"
          onClick={handleLogout}
        >
          <IoIosLogOut size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;