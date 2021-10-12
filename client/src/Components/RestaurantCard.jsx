import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TiStar } from "react-icons/ti";
import { getImage } from "../Redux/Reducer/Image/Image.action";

const RestaurantCard = (props) => {
  const [image, setImage] = useState({
    images: [
      {
        location: "",
      },
    ],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) =>
        setImage(data.payload.image)
      );
  }, [props.photos]);

  return (
    <Link to={`/restaurant/${props._id}`} className="w-full">
      <div className="bg-white p-4 w-full mb-4 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute w-full flex bottom-4 items-end justify-between">
            <div className="flex flex-col gap-2  items-start">
              {props.isPro && (
                <span className="bg-pink-600 text-white px-2 rounded text-sm ">
                  Pro extra 10% OFF
                </span>
              )}
              {props.isOff && (
                <span className="bg-blue-600 text-white px-2 rounded text-sm  ">
                  {`${props.isOff}`}% OFF
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 rounded p-1 mr-3 text-sm">
              {props.durationOfdelivery} min
            </span>
          </div>
          <img
            src={image.images.length && image.images[0].location}
            alt="food"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">{props.name}</h4>
            <span className="flex items-center bg-green-700 text-white rounded p-1 text-sm">
              {props.restauranrtreviewValue} <TiStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <p>{props.cuisine.join(", ")}</p>
            <p>₹ {props.averageCost} for one</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
