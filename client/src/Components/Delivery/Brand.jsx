import React from "react";
import Slider from "react-slick";

// components
import { NextArrow, PrevArrow } from "../carouselArrow";

const Brand = (props) => {
  const logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179319.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/cd5ee9519a5c8dd24df7a7e3ee2a3cc5_1630687365.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/ff72ea3c21dbfdfb987bc6bc067746b1_1622795405.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/8b4083969a67b437899e763223510639_1598514498.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/36a9e6f908e123a3085fe5fe5b23ab86_1583908054.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/d2e100a267de9d9d646ef87cb8fde55e_1628070391.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/d919948baa416a7dc8f85ab7d5db05c3_1611383508.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/f6e2cc03503ef28f9cba0ac3ff5c208d_1496986434.png",
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
    <div className="my-5 mb-10">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div className="w-24 h-24 mx-3 bg-white shadow">
            <img src={logo} alt="brand" className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider></div>
    </>
  );
};

export default Brand;
