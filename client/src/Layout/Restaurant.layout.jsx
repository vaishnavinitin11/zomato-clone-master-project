import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/Restaurant/imageGrid";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import Restaurantinfo from "../Components/Restaurant/Restaurantinfo";
import TabContainer from "../Components/Restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

const RestaurantLayout = (props) => {
  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/chains/2/19693512/6a660f14340efbb18e58c104dcfd6f7d.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/2/19693512/6a660f14340efbb18e58c104dcfd6f7d.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/2/19693512/6a660f14340efbb18e58c104dcfd6f7d.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/2/19693512/6a660f14340efbb18e58c104dcfd6f7d.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/2/19693512/6a660f14340efbb18e58c104dcfd6f7d.jpg",
          ]}
        />
        <Restaurantinfo
          name="Focaccia Fellas"
          restaurantRating="3.5"
          deliveryRating="4.3"
          cuisine="Fast Food, Sandwich"
          address="Marol, Mumbai"
        />
        <div className="my-4 flex flex-wrap gap-2">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;
