import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line, RiFootprintLine } from "react-icons/ri";
import { GiWineBottle } from "react-icons/gi";
import { IoNutritionOutline } from "react-icons/io5";

const MobileTabs = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
      isActive: false,
    },
    {
      id: "dining",
      icon: <RiFootprintLine />,
      name: "Dining Out",
      isActive: false,
    },
    {
      id: "night",
      icon: <GiWineBottle />,
      name: "Nightlife",
      isActive: false,
    },
    {
      id: "nutri",
      icon: <IoNutritionOutline />,
      name: "Nutrition",
      isActive: false,
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between ">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                
                  ? "flex flex-col relative items-center text-xl text-zomato-300"
                  : "flex flex-col items-center text-xl "
              }
            >
              <div
                className={
                  type === items.id &&
                  "absolute -top-3 w-full h-2 border-t-2 border-zomato-300"
                }
              />
              {items.icon}
              <h5 className="text-lg">{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const LargeTabs = () => {
  return (
    <>
      <div className="hidden lg:flex container px-20 mx-auto gap-14">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
              alt="delivery"
              className="w-full h-full "
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Delivery</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
              alt="delivery"
              className="w-full h-full "
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Dining Out</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
              alt="delivery"
              className="w-full h-full "
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Nightlife</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
              alt="delivery"
              className="w-full h-full "
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Nutrition</h3>
        </div>
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
};

export default FoodTab;
