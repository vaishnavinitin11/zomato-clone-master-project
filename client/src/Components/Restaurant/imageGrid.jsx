import React from "react";
import { AiOutlineCamera } from "react-icons/ai";


const imageGrid = (props) => {
  return (
    <>
      <div className="w-full h-60 md:hidden">
        <img
          src={props.images[0]}
          alt="restaurant image"
          className="w-full h-full object-cover rounded-lg "
        />
      </div>
      <div className="hidden w-full h-80 md:flex gap-1">
        <div className="w-7/12 h-full overflow-hidden">
          <img
            src={props.images[0]}
            alt="restaurant image"
            className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/6 h-full flex flex-col gap-1 overflow-hidden">
          <img
            src={props.images[1]}
            alt="restaurant image"
            className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
          />
          <img
            src={props.images[2]}
            alt="restaurant image"
            className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/6 h-full flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-full relative">
            <img
              src={props.images[3]}
              alt="restaurant image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg text-white items-center" />
            <h4 className="absolute inset-y-2/4  w-full h-full text-white text-center z-20 ">
              View Gallery
            </h4>
          </div>
          <div className="w-full h-full relative">
            <img
              src={props.images[4]}
              alt="restaurant image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg text-white items-center" />

            <div className="absolute flex flex-col items-center inset-y-1/4  w-full h-full text-white text-center z-20 ">
              <div className="bg-black p-3 rounded-full bg-opacity-50">
                <AiOutlineCamera />
              </div>
              <h4>View Gallery</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default imageGrid;
