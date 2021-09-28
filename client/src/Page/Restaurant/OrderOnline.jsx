import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import FoodItem from "../../Components/Restaurant/Order-Online/FoodItem";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full flex">
        <aside className="hidden md:flex flex-col border-r overflow-y-scroll border-gray-200 h-screen gap-3 w-1/4">
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-medium ">Order Online</h2>
          <h4 className="flex items-center gap-2 font-light text-gray-500">
            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
          </h4>
          <section>
            <FoodItem
              image="https://b.zmtcdn.com/data/dish_photos/798/7c23183977751ce9596b2c9e8e237798.jpg"
              price="1000"
              rating={3}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod blanditiis dolorem possimus explicabo non sapiente totam ducimus. Quidem soluta non quos quae odio reprehenderit magni! Consequuntur fugit sit dolor."
              title="Eggplant & Potato Moussaka Marinara"
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
