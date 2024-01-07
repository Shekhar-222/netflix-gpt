import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true)

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        action=""
        className="absolute text-white p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-2 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&<input
          type="text"
          placeholder="Enter Full Name"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />
        <button className="p-3 my-8 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
    <p className="py-4">{isSignInForm ? "New to Netflix?" : "Already Registered?"} <Link href="" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In Now."}</Link> </p>
      </form>
    </div>
  );
};

export default Login;
