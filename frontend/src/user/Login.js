import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <div className=" m-2 h-[98vh]  grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden">
        <div className="w-12/12 h-[98vh] hidden md:hidden lg:block">
          <img
            src={require("../assets/image1.jpg")}
            className=" w-full h-full object-cover"
            alt="Login"
          />
        </div>

        <div className="w-12/12 h-[98vh] bg-slate-50 overflow-y-scroll pt-3 px-3 no-scrollbar pb-10 flex flex-col justify-center ">
          <header className="text-2xl  font-bold">Log In </header>
          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Email</label>
            <input
              type="email"
              required
              placeholder="Enter Email"
              className="border-2 rounded p-2 pl-3"
            />
          </div>

          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="border-2 rounded p-2 pl-3"
            />
          </div>
         
          <div className="flex mt-5 gap-2">
            <input type="checkbox" />
            <label className="font-sm font-normal text-gray-400 ">
              Remember me.
            </label>
          </div>

          <button className="text-white bg-blue-600 p-3 font-bold items-center w-full rounded my-4 hover:text-blue-500 hover:bg-slate-300">
            Login {">>"}
          </button>
          <h2>
            Didn't Have an Account{" "}
            <Link className="text-gray-400 underline hover:text-blue-500">
              Register
            </Link>
            .
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
