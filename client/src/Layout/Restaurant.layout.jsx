import React from "react";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/Restaurant/imageGrid";

const RestaurantLayout = () => {
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
      </div>
    </>
  );
};

export default RestaurantLayout;
