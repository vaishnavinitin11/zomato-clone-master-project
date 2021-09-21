import React, { useState } from "react";

// Components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "54255",
      photos: [
        "https://b.zmtcdn.com/data/pictures/8/39018/101cf63a25b4a8a23c5fa691fe535699.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "Guru Krupa",
      cuisine: [
        "South Indian",
        "North Indian",
        "Chinese",
        "Street Food",
        "Desserts",
        "Fast Food",
        "Beverages",
      ],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 35,
      restauranrtreviewValue: 3.9,
    },
    {
      _id: "54255-2",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/3/18216863/7a906cbc912a3b9c3f10e8c5c08297e8_featured_v2.jpg",
      ],
      name: "Chinese Wok - Wok Express",
      cuisine: ["Chinese", "Momos"],
      averageCost: 100,
      isPro: false,
      isOff: 50,
      durationOfdelivery: 53,
      restauranrtreviewValue: 3.8,
    },
    {
      _id: "54255-3",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/9/18877949/83ffa65c9ab42eb239ab12020dfb8c38_o2_featured_v2.jpg",
      ],
      name: "Chinese Wok - Wok Express",
      cuisine: ["Chinese", "Momos"],
      averageCost: 100,
      isPro: true,
      isOff: 50,
      durationOfdelivery: 53,
      restauranrtreviewValue: 3.8,
    },
  ]);
  return (
    <>
      <DeliveryCarousel />
      {/* <Brand/> */}
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
