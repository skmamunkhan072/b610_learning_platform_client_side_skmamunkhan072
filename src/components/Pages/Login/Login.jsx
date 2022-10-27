import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { TbArrowRightTail } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvaider";
import { useState } from "react";

const Login = () => {
  const { handelLoginGmailPassword, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const forms = location?.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handelLoginGmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // if (result.user.emailVerified) {
        navigate(forms, { replace: true });
        // } else {
        // toast.error("Your email is no't verified. please your email verify");
        // }
      })
      .catch((error) => {
        setError(error);
        console.log("error", error);
      });
    form.reset();
  };
  return (
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
            <div className="login-container w-full max-w-xl  m-auto">
              <div className="login-title">Login</div>
              <form onSubmit={handleSubmit} className="login-form">
                <input type="email" name="email" placeholder="Your Email" />
                <input type="password" name="password" placeholder="password" />
                <p className="text-center error-message">
                  {error ? "❌ Pless curent value" : ""}
                </p>
                <p className="mt-3 ml-[10px] cursor-pointer">
                  Forgot Password --------
                </p>
                <button className="Login_btn btn">Log in</button>
                <p className="mt-3 text-center">
                  Don't have an account?
                  <Link to="/singUp">Sing Up...</Link>
                </p>
              </form>

              <p className="mt-20">--------------- Log In ---------------</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
