import React from "react";

function AdveritseSection() {
  return (
    <div className="w-12/12 my-10 flex justify-center no-scrollbar ">
      <div className="w-12/12 mx-3 md:mx-0 md:w-11/12 lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-12/12 h-[35vh] overflow-hidden bg-black rounded">
          <img
            src={require("../assets/image1.jpg")}
            alt="summer"
            loading="lazy"
            className="w-full h-full object-cover transistion duration-700 ease-out hover:scale-110 opacity-60 rounded"
          />
          <div className="absolute  top-[45%] w-full  flex justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-sans text-white font-bold">
                LOOKBOOK 2022
              </h1>
              <h1 className="text-md italic font-semibole text-white">
                Make Love This Look
              </h1>
            </div>
          </div>
        </div>
        <div className="relative bg-black w-12/12 h-[35vh] overflow-hidden rounded">
          <img
            src={require("../assets/image1.jpg")}
            alt="summer"
            loading="lazy"
            className="w-full h-full object-cover transistion duration-700 ease-out hover:scale-110 opacity-60 rounded"
          />
          <div className="absolute  top-[45%] w-full  flex justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-md italic font-semibole text-white">
                summer sales
              </h1>
              <h1 className="text-5xl font-sans text-white font-bold">
                Up to 70%
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdveritseSection;
