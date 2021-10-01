import React from "react";

const FoodItem = (props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3>{props.name}</h3>
        <div className="flex flex-col items-end">
          <small>₹{parseInt(props.price) * parseInt(props.quantity)}</small>
          <div className="px-1 bg-zomato-400 text-white rounded flex items-center gap-1">
            <button className="p-1 bg-zomato-400 text-white rounded-lg">
              -
            </button>
            <small>38</small>
            <button className="p-1 bg-zomato-400 text-white rounded-lg">
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="my-1" />
    </>
  );
};

export default FoodItem;
