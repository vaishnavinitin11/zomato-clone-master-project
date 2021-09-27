import React from "react";

// components
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full">
        <aside className="hidden md:flex flex-col border-r overflow-y-scroll border-gray-200 h-screen gap-3 w-1/4">
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          
        </aside>
        <div className="w-full md:w-3/4"></div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
