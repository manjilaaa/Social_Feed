import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

 
   useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
  }, []);
   const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <div className="w-64 bg-white shadow-md h-screen p-6 flex flex-col relative">
      <div>
        <ul className="space-y-4">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/post"}>Posts</Link></li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/add"}> Add Post</Link>
          </li>
        </ul>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t pt-4">
        <span className="font-semibold text-gray-700 truncate">{userEmail}</span>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleLogout}
        >
          <IoIosLogOut size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
