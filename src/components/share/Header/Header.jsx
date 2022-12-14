import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSketch } from "react-icons/ai";
import "./Header.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvaider";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, singOutAccount } = useContext(AuthContext);
  const [thems, setThems] = useState(false);

  const handelMobileMenu = (event) => {
    event.target = setIsMenuOpen(true);
    console.log(event.target);
  };

  // handel user account log out
  const handelUserLogOut = () => {
    singOutAccount()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // handelTheesChange
  const handelTheesChange = () => {
    if (thems) {
      setThems(false);
      return;
    } else {
      setThems(true);
      return;
    }
  };

  return (
    <div className="bg-gray-900 sticky top-0 left-0 drop-shadow-2xl shadow-lg shadow-slate-500/10 z-[99]">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <AiOutlineSketch className="text-5xl text-teal-accent-400 logo_icon" />
            <div className="ml-2 text-start text-xl font-bold tracking-wide text-gray-100 uppercase">
              <p>Study Course</p>
              <small>Journey to success</small>
            </div>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/home"
                className="font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/pricing/:1"
                className="font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
            <li>
              {user?.uid ? (
                <>
                  <span
                    onClick={handelUserLogOut}
                    className="font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    LogOut
                  </span>
                  <span className="ml-4 font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400">
                    {user?.displayName ? user?.displayName : "No Name"}
                  </span>
                </>
              ) : (
                <>
                  <Link
                    to="/singUp"
                    className="font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Sign up
                  </Link>
                  <Link
                    to="/login"
                    className="ml-4 font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Login
                  </Link>
                </>
              )}
            </li>

            <li>
              <div className="profile_wraper font-medium tracking-wide text-gray-100 cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400">
                <span className="tooltip"> hello</span>
                {user?.photoURL ? (
                  <img
                    className="Profile_img"
                    style={{
                      height: "40px",
                      width: "40px",
                      margin: "0px 5px",
                      borderRadius: "50%",
                    }}
                    src={user?.photoURL}
                  ></img>
                ) : (
                  <HiOutlineUserCircle
                    style={{
                      height: "40px",
                      width: "40px",
                      margin: "0px 5px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
            </li>
            <li onClick={handelTheesChange}>
              {thems ? (
                <MdOutlineLightMode className="text-black text-2xl cursor-pointer" />
              ) : (
                <MdOutlineNightlight className="text-white text-2xl cursor-pointer" />
              )}
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full mobile_menu_wraper">
                <div className="p-5 bg-slate-300 rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <AiOutlineSketch className="text-5xl text-teal-accent-400 logo_icon" />

                        <div className="ml-2 text-start text-xl font-bold tracking-wide text-gray-600 uppercase">
                          <p>Study Course</p>
                          <small>Journey to success</small>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <button
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul
                      onClick={handelMobileMenu}
                      className="space-y-4 mobile_menu_list"
                    >
                      <li>
                        <Link
                          to="/home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/pricing/:1"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        {user?.uid ? (
                          <>
                            <span
                              onClick={handelUserLogOut}
                              className="font-medium tracking-wide text-black cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              LogOut
                            </span>
                            <span className="ml-4font-medium tracking-wide text-black cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400">
                              {user?.displayName
                                ? user?.displayName
                                : "No Name"}
                            </span>
                          </>
                        ) : (
                          <>
                            <p className="mb-4">
                              <Link
                                to="/singUp"
                                className="font-medium tracking-wide text-black  cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Sign up
                              </Link>
                            </p>
                            <p>
                              <Link
                                to="/login"
                                className="ml-4 font-medium tracking-wide text-black cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Login
                              </Link>
                            </p>
                          </>
                        )}
                      </li>
                      <li>
                        <div className="block w-[50px] h-[50px]  font-medium tracking-wide text-black cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400">
                          {user?.photoURL ? (
                            <img
                              src={user?.photoURL}
                              alt=""
                              className="profile_img"
                            />
                          ) : (
                            <HiOutlineUserCircle className="profile_img" />
                          )}
                        </div>
                      </li>
                      <li onClick={handelTheesChange}>
                        {thems ? (
                          <MdOutlineLightMode className="text-black text-2xl cursor-pointer" />
                        ) : (
                          <MdOutlineNightlight className="text-white text-2xl cursor-pointer" />
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
