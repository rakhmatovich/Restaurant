import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function Cake() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrows />,
    prevArrow: <Arrows />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full mt-20 py-20 bg-[#BEA087] text-center flex justify-center">
      <div className="w-[80%]">
        <Slider {...settings}>
          <div className="w-[19%]">
            <img
              className="w-full"
              src="https://safiabakery.uz/uploads/products/171_1671024360.png"
              alt=""
            />
            <div className="card-body">
              <h3>Джульета</h3>
            </div>
          </div>
          <div className="w-[19%]">
            <img
              className="w-full"
              src="https://safiabakery.uz/uploads/products/171_1678877392.png"
              alt=""
            />
            <div className="card-body">
              <h3>Мороженка торт</h3>
            </div>
          </div>
          <div className="w-[19%]">
            <img
              className="w-full"
              src="https://safiabakery.uz/uploads/products/171_1671271062.png"
              alt=""
            />
            <div className="card-body">
              <h3>Панчо торт</h3>
            </div>
          </div>
          <div className="w-[19%]">
            <img
              className="w-full"
              src="https://safiabakery.uz/uploads/products/171_1671011808.png"
              alt=""
            />
            <div className="card-body">
              <h3>Роше торт</h3>
            </div>
          </div>
          <div className="w-[19%]">
            <img
              className="w-full"
              src="https://safiabakery.uz/uploads/products/171_1671252382.png"
              alt=""
            />
            <div className="card-body">
              <h3>Фруктовый торт</h3>
            </div>
          </div>
          <div className="w-[19%]">
            <img
              className="w-full"
              src="https://safiabakery.uz/uploads/products/171_1671014979.png"
              alt=""
            />
            <div className="card-body">
              <h3>Черный принц торт</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
