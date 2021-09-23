import React from "react";
import Slider from "react-slick";

// Components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../carouselArrow";

const DeliveryCarousel = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
      title: "Burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602870888.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
      title: "Paneer",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/9694b563c793ea7bddf49f619dd4b7751613214093.png",
      title: "Cake",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c7c0bdb44105be74a95e90dc038623a01612676280.png",
      title: "Soup",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/9d9b1ad1bee6fecdf40afc8103f30a481612465108.png",
      title: "Fries",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <h1 className="text-xl mb-4 font-semibold">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex flex-wrap lg:gap-0 gap-3 justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousel;
