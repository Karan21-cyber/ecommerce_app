import React from "react";

function CategorySection() {
  return (
    <section className=" w-12/12 my-10 flex justify-center ">
      <div className="w-12/12 mx-3 md:mx-0 md:w-11/12 lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative min-w-[50%] w-[100%] min-h-[70vh] h-[70vh] overflow-hidden">
          <img
            src={require("../assets/trendygirl.jpeg")}
            alt="girl"
            loading="lazy"
            className=" w-full h-full object-cover transition duration-700 ease-in-out hover:scale-110 "
          />

          <div className="absolute bottom-[4%] w-full flex justify-center ">
            <h1 className="px-16 py-2 bg-white text-lg transition duration-700 ease-in-out hover:scale-110 rounded">
              Women
            </h1>
          </div>
        </div>

        <div className="h-[70vh] w-12/1 grid grid-cols-2 gap-6">
          <div className="w-12/12 h-full grid grid-rows-2 gap-6 ">
            <div className=" relative w-full h-[33.5vh] overflow-hidden">
              <img
                src={require("../assets/footware.jpeg")}
                alt="girl"
                loading="lazy"
                className=" w-full h-full object-cover transition duration-700 ease-in-out hover:scale-110"
              />
              <div className="absolute bottom-[4%] w-full flex justify-center ">
                <h1 className="px-16 py-2 bg-white text-lg transition duration-700 ease-in-out hover:scale-110 rounded">
                  Footware
                </h1>
              </div>
            </div>
            <div className=" relative w-full h-[33.5vh] overflow-hidden">
              <img
                src={require("../assets/bag.jpeg")}
                alt="girl"
                loading="lazy"
                className=" w-full h-full object-cover transition duration-700 ease-in-out hover:scale-110"
              />
              <div className="absolute bottom-[4%] w-full flex justify-center ">
                <h1 className="px-16 py-2 bg-white text-lg transition duration-700 ease-in-out hover:scale-110 rounded">
                  Assoceries
                </h1>
              </div>
            </div>
          </div>
          <div className="relative w-12/12 h-full overflow-hidden">
            <img
              src={require("../assets/watch.jpeg")}
              alt="girl"
              loading="lazy"
              className=" w-full h-full object-cover transition duration-700 ease-in-out hover:scale-110"
            />
            <div className="absolute bottom-[4%] w-full flex justify-center ">
              <h1 className="px-16 py-2 bg-white text-lg transition duration-700 ease-in-out hover:scale-110 rounded">
                Watch
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
