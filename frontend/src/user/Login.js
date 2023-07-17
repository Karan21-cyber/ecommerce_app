import React from "react";

function Login({ handleClose, handleShowSignup }) {
  return (
    <div className=" h-full w-full overflow-hidden ">
      <div className=" m-2 w-12/12 h-full  grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden">
        <div className=" hidden md:hidden lg:block">
          <img
            src={require("../assets/image1.jpg")}
            className=" w-full h-full object-cover"
            alt="Login"
          />
        </div>

        <div className="relative w-full h-[86vh] bg-slate-50 overflow-y-scroll py-3 px-3 no-scrollbar flex flex-col justify-center ">
          <span
            className="absolute -top-1 right-2 text-4xl cursor cursor-pointer ease-linear duration-300 text-gray-400 animate-bounce hover:animate-none hover:text-gray-600"
            onClick={handleClose}
          >
            &times;
          </span>
          <header className="text-2xl  font-bold">Log In </header>
          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Email</label>
            <input
              type="email"
              required
              placeholder="Enter Email"
              className="border-2 rounded p-2 px-3"
            />
          </div>

          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="border-2 rounded p-2 px-3"
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
            <span
              className="text-gray-400 underline hover:text-blue-500 cursor-pointer"
              onClick={handleShowSignup}
            >
              Register
            </span>
            .
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
