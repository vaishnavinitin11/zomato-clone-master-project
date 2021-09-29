import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import ReactStars from "react-star-rating-component";

// componennts
import MenuCollection from "../../Components/Restaurant/MenuCollection";
import { NextArrow, PrevArrow } from "../../Components/carouselArrow";
import MenuSimilarRestaurantcard from "../../Components/Restaurant/MenuSimilarRestaurantcard";
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";
import Mapview from "../../Components/Restaurant/Mapview";

const Overview = () => {
  const [menuImage, setMenuImages] = useState({ images: [] });
  const { id } = useParams();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12 ">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all Menu
                <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages="3"
              image={[
                "https://b.zmtcdn.com/data/menus/649/18140649/c54628c7e0def4570619923e4a2e0644.jpg",
                "https://b.zmtcdn.com/data/menus/649/18140649/4f3a88321f4d2a693fc8705ab20e813d.jpg",
                "https://b.zmtcdn.com/data/menus/649/18140649/99ad32bd8dff02162536594e46b9f8e8.jpg",
              ]}
            />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹100 for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
              </Slider>
            </div>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
            <Mapview
              title="Focaccia Fellas"
              phno="+919833701931"
              mapLocation={[19.116106131480507, 72.88434901872225]}
              address="K1, C-28, Ground Floor, Raj Industrail Estate Unit, Marol Military Road, Marol, Mumbai"
            />
          </div>
          <div className="my-4 flex flex-col gap-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 rounded-xl shadow-md flex flex-col gap-4"
        >
          <Mapview
            title="Focaccia Fellas"
            phno="+919833701931"
            mapLocation={[19.116106131480507, 72.88434901872225]}
            address="K1, C-28, Ground Floor, Raj Industrail Estate Unit, Marol Military Road, Marol, Mumbai"
          />
        </aside>
      </div>
    </>
  );
};

export default Overview;
