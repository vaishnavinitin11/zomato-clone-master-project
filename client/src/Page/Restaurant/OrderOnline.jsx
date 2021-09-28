import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import FoodItem from "../../Components/Restaurant/Order-Online/FoodItem";
import FoodList from "../../Components/Restaurant/Order-Online/FoodList";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";


const OrderOnline = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-4 ">
            <h2 className="text-xl font-medium ">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            <FoodList
              title="Recommended"
              items={[
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/798/7c23183977751ce9596b2c9e8e237798.jpg",
                  price: "1000",
                  rating: 3,
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod blanditiis dolorem possimus explicabo non sapiente totam ducimus. Quidem soluta non quos quae odio reprehenderit magni! Consequuntur fugit sit dolor.",
                  title: "Eggplant & Potato Moussaka Marinara",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/798/7c23183977751ce9596b2c9e8e237798.jpg",
                  price: "1000",
                  rating: 3,
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod blanditiis dolorem possimus explicabo non sapiente totam ducimus. Quidem soluta non quos quae odio reprehenderit magni! Consequuntur fugit sit dolor.",
                  title: "Eggplant & Potato Moussaka Marinara",
                },
              ]}
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
