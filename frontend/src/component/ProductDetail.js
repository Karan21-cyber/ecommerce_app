import React, { useState } from 'react'
import { AddIcon, ArrowForwardIcon, CloseIcon, RemoveIcon, StarHalfIcon } from '../icons';

function ProductDetail({ handleShowModal }) {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <div className="relative w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-scroll no-scrollbar">
      <div className="w-12/12 h-full ">
        <div className="w-full h-[74vh] ">
          <img
            src={require("../assets/cap.webp")}
            alt="cap"
            loading="lazy"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex gap-2 mt-3 mx-3">
          <img
            src={require("../assets/cap.webp")}
            alt="cap"
            loading="lazy"
            className="w-[100px] h-[100px] object-cover border-2 border-red-200"
          />
          <img
            src={require("../assets/cap.webp")}
            alt="cap"
            loading="lazy"
            className="w-[100px] h-[100px] object-cover border-2 border-red-200"
          />
          <img
            src={require("../assets/cap.webp")}
            alt="cap"
            loading="lazy"
            className="w-[100px] h-[100px] object-cover border-2 border-red-200"
          />
        </div>
      </div>
      <div className="w-12/12 h-full  p-5 flex flex-col gap-5">
        <div className="flex gap-2">
          <img
            src={require("../assets/cap.webp")}
            alt="cap"
            loading="lazy"
            className="w-[80px] h-[80px] object-cover rounded shadow-xl "
          />
          <div className="flex flex-col my-2">
            <h1 className="text-lg font-semibold ">Fashion Wears</h1>
            <p className="text-md font-sans text-gray-500 font-medium">
              We sells Pants
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold ">Merury Tee Cap</h1>
          <div className="flex justify-between">
            <h2 className="text-xl font-medium ">
              {" "}
              <p className="line-through text-red-500">$2000</p> $1800
            </h2>
            <p>
              <StarHalfIcon />
              <StarHalfIcon /> <StarHalfIcon /> <StarHalfIcon />
              {`(${"2 reviews"})`}
            </p>
          </div>
        </div>

        <p className="w-full h-[15vh] text-gray-400 overflow-hidden ">
          Channel your inner-corduroy queen with the Woven Havana Cord Mini
          Skirt. The trend is back and it’s big. A throwback to 70s style, this
          mini features a classic cord design in a simple A-line cut. Plus, it
          has pockets. Need we say more?
        </p>
        <div className='text-xl font-medium font-sans '>
          Available Stocks : <span>12</span>
        </div>

        <div className="flex gap-5 w-[180px] border-2 border-black justify-center rounded-[20px]">
          <AddIcon
            onClick={addCount}
            className="my-1 hover:cursor-pointer"
            sx={{ fontSize: "30px" }}
          />
          <input
            className="w-[50px] text-center text-2xl font-bold outline-none "
            min="1"
            max="20"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

          <RemoveIcon
            onClick={subCount}
            className="my-1 hover:cursor-pointer"
            sx={{ fontSize: "30px" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  w-full mt-5  gap-6">
          <div className="flex justify-center  bg-blue-600 w-[300px] rounded-[20px] py-1 text-lg text-white font-bold animate-bounce hover:animate-none hover:text-black hover:cursor-pointer">
            Add to Cart
          </div>

          <div className="flex justify-center bg-purple-600 w-[300px] rounded-[20px] py-1 text-lg text-white font-bold hover:animate-slideRight hover:text-black hover:cursor-pointer">
            Add to wishlist
          </div>
        </div>
        <label className='text-lg font-medium hover:cursor-pointer hover:text-blue-500'>View details <ArrowForwardIcon /></label>
      </div>
      <CloseIcon
        onClick={handleShowModal}
        className="absolute top-0 right-0 bg-black z-40 hover:cursor-pointer hover:text-red-300 hover:bg-white hover:animate-spin "
        sx={{ fontSize: "40px", color: "white" }}
      />
    </div>
  );
}

export default ProductDetail