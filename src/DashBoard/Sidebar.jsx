import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import MenuItem from "./Menu/MenuItems";
import { useState } from "react";
import { BsGraphUp } from "react-icons/bs";
import HRMenu from "./Menu/HRMenu";
import EmployeeMenu from "./Menu/EmployeeMenu";
import AdminMenu from "./Menu/AdminMenu";
import { GrLogout } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import useAuth from "../Component/Hook/UseAuth";
import useRole from "../Component/Hook/useRole";

import { FaHome } from "react-icons/fa";
const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role, isLoading] = useRole();
  console.log(role, isLoading);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-600 text-gray-100 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
             className="md:block w-21 h-10"
                src="https://i.ibb.co/Y7wBDqY/Work-Track-2-removebg-preview.png"
                alt="logo"
             
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-900  text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-800 mx-auto">
            <Link to="/">
            <button
        
            className="flex  items-center px-8 py-2 mt-5 text-gray-100 hover:bg-red-500 hover:text-gray-100 transition-colors duration-300 transform rounded-lg border border-red-500"
          >
            <FaHome className="w-full h-full" />
            <span className="mx-4 font-medium">Home</span>
          </button>
            </Link>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col justify-between flex-1 mt-6">
          {/* Menu Items */}
          <nav>
            <MenuItem
              label="Statistics"
              address="/dashboard"
              icon={BsGraphUp}
              className="text-red-500 hover:bg-gray-700 hover:text-gray-100 border-l-4 border-transparent hover:border-green-500"
            />
            {role === "hr" && <HRMenu />}
            {role === "employee" && <EmployeeMenu />}
            {role === "admin" && <AdminMenu />}
           
          </nav>
        </div>

        <div>
          <hr className="my-6 border-gray-700" />

          {/* Profile Menu */}
          <MenuItem
            label="Profile"
            address="/dashboard/profile"
            icon={CgProfile}
            className="hover:bg-gray-700 hover:text-gray-100 border-l-4 border-transparent hover:border-green-500"
          />

          {/* Logout Button */}
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-100 hover:bg-red-500 hover:text-gray-100 transition-colors duration-300 transform rounded-lg border border-red-500"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
