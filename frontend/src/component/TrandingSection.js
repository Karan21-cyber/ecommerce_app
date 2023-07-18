import React from "react";
import CardProduct from "./CardProduct";

function TrandingSection() {

  return (
    <div className="flex flex-col justify-center no-scrollbar">
      <section className=" w-12/12 my-10 flex justify-center  ">
        <div className="flex flex-col">
          <header className="flex gap-10 ">
            <span className="w-[80px] h-[1px] bg-black mt-4"></span>
            <h1 className="text-2xl font-mono font-bold ">TRENDING</h1>
            <span className="w-[80px] h-[1px] bg-black mt-4"></span>
          </header>
          <h3 className="text-center pt-2 font-sans italic text-lg font-semibold text-gray-500">
            Top view in this week
          </h3>
        </div>
      </section>
      <div className="flex flex-wrap gap-4 w-full  justify-center">
        <CardProduct />
      </div>
    </div>
  );
}

export default TrandingSection;
