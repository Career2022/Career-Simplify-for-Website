

import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../Context/AppContext";

const Navbar = () => {
  const { navigate,isEducator } = useContext(AppContext);
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  // for create account

  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        onClick={() => navigate("/")}
        src={assets.clogo}
        alt="logo"
        className="w-28 lg:w-15 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button className="cursor-pointer" onClick={()=>{navigate("/educator")}}>{isEducator ? 'Educator-Dashboard':"Become Educator"}</button>|
              <Link to="/my-enrollments">My-Enrollments</Link>
            </>
          )}
        </div>

        {/* create account */}
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>

      {/* for small screen */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button className="cursor-pointer"  onClick={()=>{navigate("/educator")}}>{isEducator ? 'Educator-Dashboard':"Become Educator"}</button>||
              <Link to="/my-enrollments">My-Enrollments</Link>
            </>
          )}
        </div>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="user icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
