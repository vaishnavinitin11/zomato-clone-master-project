import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = () => {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative ">
          {""}
          <img
            src="https://b.zmtcdn.com/data/reviews_photos/ca8/2519a3cccfb495e434264e0d46c83ca8_1568731665.jpg"
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%",
            }}
          />
        </div>

        <div className="absolute w-full left-6 bottom-2 text-white">
          <h4 className="z-10">Trending This Week</h4>
          <h6 className="z-10 flex items-center">
            30 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
