import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ImageSlider() {
  const SliderImages = [
    {
      url: "image1.jpg",
    },
    {
      url: "image2.jpg",
    },
    {
      url: "image3.jpg",
    },
  ];

  const [activeImageNum, setActiveImageNum] = useState(0);
  const length = SliderImages.length;

  const nextSlide = () => {
    setActiveImageNum((prevNum) => (prevNum + 1) % length);
  };

  const prevSlide = () => {
    setActiveImageNum((prevNum) => (prevNum + length - 1) % length);
  };

  if (!Array.isArray(SliderImages) || SliderImages.length <= 0) {
    return null;
  }

  return (
    <section className="w-full h-[70vh]  relative overflow-hidden no-scrollbar">
      {SliderImages.map((slide, index) => (
        <div
          className={
            index === activeImageNum
              ? "currentSlide w-full h-full ease-in delay-150 duration-300 active"
              : "currentSlide"
          }
          key={index}
        >
          {index === activeImageNum && (
            <img
              src={require(`../assets/${slide.url}`)}
              className="w-full h-full object-cover transistion delay-75"
              alt="slider"
              loading="lazy"
            />
          )}
        </div>
      ))}

      <div className="absolute w-full flex justify-between top-[50%] px-7 ">
        <ArrowBackIosIcon
          onClick={prevSlide}
          className="cursor-pointer hover:animate-ping"
        />
        <ArrowForwardIosIcon
          onClick={nextSlide}
          className="cursor-pointer  hover:animate-ping"
        />
      </div>
    </section>
  );
}

export default ImageSlider;
