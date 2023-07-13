import React from "react";

function Signup() {
  return (
    <div className="bg-slate-600 h-screen w-screen overflow-hidden ">
      <form>
        {/* this is for images */}
        <div className="">
          
          <img src={require("../assets/image1.jpg")} alt="signup" loading="lazy" className="hidden  cover md:block rounded" />

          {/* this is for input forms */}
          <div className="w-full h-full  bg-white">
            <h1>Registration</h1>

          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
