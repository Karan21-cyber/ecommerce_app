import React, { useState } from 'react'
import { CloseIcon, FavoriteIcon, ShoppingCartIcon, StarIcon, VisibilityIcon } from "../icons";
import { Modal } from '@mui/material';
import ProductDetail from './ProductDetail';

function CardProduct() {
      const [isHovered, setIsHovered] = useState(false);
      const [showModel , setShowModel] = useState(false);

      const handleMouseEvent = () => {
        setIsHovered(true);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      const handleShowModal = () => {
        setShowModel(false);
      }

  return (
    <div>
      <div className="w-[345px] md:w-[280px]  h-[40vh] md:h-[38vh] no-scrollbar">
        <div
          className="relative w-full h-[28vh] md:h-[28vh overflow-hidden "
          onMouseEnter={handleMouseEvent}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={require("../assets/blackpant.webp")}
            alt="blackpant"
            loading="lazy"
            className="w-full h-full object-cover hover:scale-110 transistion duration-700 ease-out cursor-pointer "
          />
          <label className="absolute top-3 right-1 bg-pink-200 px-3 rounded text-md font-semibold text-orange-800">
            offer
          </label>
          {/* <label className="absolute top-3 right-2 bg-gray-300 px-2 rounded text-red-600 text-md font-semibold">
              Out of Stock
            </label> */}
          {isHovered ? (
            <div>
              <FavoriteIcon className="absolute top-3 left-3 transition ease-in-out delay-150 text-blue-600 scale-110  duration-300 cursor-pointer animate-bounce hover:animate-none" />
              <div className="absolute top-[45%] text-sm left-[40%] px-5 py-1 bg-white rounded-xl">
                <VisibilityIcon
                  className=" transition ease-in-out delay-150 text-blue-600 scale-110  duration-300 cursor-pointer hover:animate-[wiggle_1s_ease-in-out_infinite]"
                  onClick={(e) => setShowModel(true)}
                />
              </div>
              <ShoppingCartIcon className="absolute bottom-1 right-1 transition ease-in-out delay-150 text-blue-600 scale-110  duration-300 cursor-pointer animate-bounce hover:animate-none" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg font-sans font-semibold text-gray-800 cursor-pointer hover:text-blue-600">
            BlackPant
          </label>
          <label className="text-md font-sans font-semibold ">
            <p className="text-md font-sans line-through text-red-500">
              $3000
            </p>{" "}
            - <span>$2900</span>
          </label>
          <div className="flex text-yellow-400">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal
        open={showModel}
        onClose={handleShowModal}
        aria-labelledby="model-model-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center outline-none border-none "
      >
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 h-[88vh] p-2  bg-white rounded shadow-lg outline-none border-none">
          <ProductDetail handleShowModal={handleShowModal} />
        </div>
      </Modal>
    </div>
  );
}

export default CardProduct