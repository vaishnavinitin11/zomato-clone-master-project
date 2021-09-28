import React from "react";

// components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div>
        <h2 className="bg-white top-0 sticky w-full px-2 py-1 z-10 text-xl font-medium">
          {props.title}
        </h2>
        <div className="flex flex-col gap-3">
          {props.items.map((item) => (
            <FoodItem {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodList;
