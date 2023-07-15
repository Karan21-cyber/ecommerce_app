import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <div className=" m-2 h-[98vh]  grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden">
        <div className="w-12/12 h-[98vh] hidden md:hidden lg:block">
          <img
            src={require("../assets/image1.jpg")}
            className=" w-full h-full object-cover"
            alt="signup"
          />
        </div>

        <div className="w-12/12 h-[98vh] bg-slate-50 overflow-y-scroll pt-3 px-3 no-scrollbar pb-10">
          <header className="text-2xl font-bold">Create Customer Account</header>
          <div className="flex flex-col md:flex-row   gap-2 ">
            <div className="flex mt-5 flex-col gap-2 w-full">
              <label className="font-sm font-normal">First Name</label>
              <input
                type="number"
                placeholder="Enter First Name"
                className="border-2 rounded p-2 pl-3"
              />
            </div>
            <div className="flex mt-5 flex-col gap-2 w-full">
              <label className="font-sm font-normal">Last Name</label>
              <input
                type="number"
                placeholder="Enter Last Name"
                className="border-2 rounded p-2 pl-3"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row   gap-2 ">
            <div className="flex mt-5 flex-col gap-2 w-full">
              <label className="font-sm font-normal">Date of Birth</label>
              <input
                type="date"
                className="border-2 rounded p-2 pl-3 text-gray-400"
              />
            </div>

            <div className="flex mt-5 flex-col gap-2 w-full">
              <label className="font-sm font-normal">Gender</label>
              <select className="border-2 rounded p-2 pl-3 text-gray-400">
                <option>Select Gender</option>
              </select>
            </div>
          </div>

          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Phone Number</label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="border-2 rounded p-2 pl-3"
            />
          </div>

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
          <h2 className="font-normal font-sm text-gray-400 mt-5">
            Include minimum of 8 characters and at least one number, one
            letter,one special character.
          </h2>
          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Confirm Password</label>
            <input
              type="password"
              placeholder="Retype Password"
              className="border-2 rounded p-2 pl-3"
            />
          </div>
          <div className="flex mt-5 gap-2">
            <input type="checkbox" />
            <Link className="font-sm font-normal text-red-300 ">
              I agree Terms & condition.
            </Link>
          </div>

          <button className="text-white bg-blue-600 p-3 font-bold items-center w-full rounded my-4 hover:text-blue-500 hover:bg-slate-300">
            Signup {">>"}
          </button>
          <h2>
            Already Have an Account{" "}
            <Link className="text-gray-400 underline hover:text-blue-500">
              Login
            </Link>
            .
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
