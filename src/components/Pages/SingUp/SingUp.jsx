import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowRightTail } from "react-icons/tb";
import { BsGoogle } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvaider";
import "./SingUp.css";
import Swal from "sweetalert2";
import { useState } from "react";
import swal from "sweetalert";

const SingUp = () => {
  const {
    handelUserCreate,
    userNameProfileUpdate,
    handelUserVeryfy,
    handelGoogleUserCreatePopup,
  } = useContext(AuthContext);
  const nevigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const profileUrl = form.photoURL.value;
    const name = form.name.value;
    handelUserCreate(email, password)
      .then((result) => {
        const user = result.user;
        handelUserVeryfy();
        nevigate("/");
        userNameProfileUpdate(name, profileUrl);
        Swal.fire({
          icon: "error",
          title: "Enter your curent value",
          text: "pless try agin !",
        });
        form.reset();
      })
      .catch((error) => {
        swal("Good job!", "You clicked the value!", "success");

        console.log("error", error);
        setError(error);
      });
    form.reset();
  };
  //   handel Google user create
  const handelGoogleUserCreate = () => {
    handelGoogleUserCreatePopup()
      .then((result) => {
        const user = result.user;
        swal("Good job!", "You clicked the value!", "success");
        // toast.success("please  verify email address");
      })
      .catch((error) => {
        console.log("error", error);
        Swal.fire({
          icon: "error",
          title: "Enter your curent value",
          text: "pless try agin !",
        });
      });
  };

  return (
    <div>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700 bg-[#661fff]">
          <svg
            className="absolute inset-x-0 bottom-[-1px] text-[#2A303C]	"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  The quick, brown fox <br className="hidden md:block" />
                  jumps over a lazy dog
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <Link
                  to="/home"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <TbArrowRightTail className="inline-block text-2xl mt-[6px] ml-1" />
                </Link>
              </div>
              <div className="sing-up-container login-container w-full max-w-xl  m-auto">
                <div className="login-title">Sing Up</div>
                <form onSubmit={handleSubmit} className="login-form">
                  <input
                    type="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="photoURL"
                    name="photoURL"
                    placeholder="Your photoURL"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                  />
                  <p className="text-center error-message">{error}</p>
                  <button className="btn">Sing Up</button>
                  <p className=" text-center">
                    Don't have an account?
                    <Link to="/login">Log in...</Link>
                  </p>
                </form>
                <div className="flex justify-center items-center">
                  <div
                    onClick={handelGoogleUserCreate}
                    className="sosal_icon_wraper"
                  >
                    <BsGoogle className="text-4xl cursor-pointer " />
                  </div>
                  <div className="sosal_icon_wraper">
                    <AiFillGithub className="text-4xl cursor-pointer " />
                  </div>
                </div>
                <p>--------------- Sing Up ---------------</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
