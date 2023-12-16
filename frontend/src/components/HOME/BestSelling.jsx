import React from "react";

const bestSellingProducts = [
  {
    id: 1,
    title: "Блэк форест тарталетка",
    description:
      "Шоколадное песочное тесто, ванильный Шантильи, молочный Шантильи",
    price: "2.2",
    url: "https://safiabakery.uz/uploads/products/thumbs/171_1669992159.png",
  },
  {
    id: 2,
    title: "Вишенка торт",
    description:
      "Песочное тесто с классическим ганашом и свежей вишней. Торт расчитан на 6-8 человек",
    price: "9.2",
    url: "https://safiabakery.uz/uploads/products/thumbs/171_1672828185.png",
  },
  {
    id: 3,
    title: "Дари торт",
    description:
      "Тонкие слои классического бисквита в сочетании с творожно-сливочным кремом и малиновым",
    price: "30",
    url: "https://safiabakery.uz/uploads/products/thumbs/171_1693203748.png",
  },
  {
    id: 4,
    title: "Черный принц торт круглый",
    description: "Тонкие песочные шоколадные коржи с шоколадным сливочным",
    price: "25",
    url: "https://safiabakery.uz/uploads/products/thumbs/171_1671014979.png",
  },
];

export default function BestSelling() {
  return (
    <div className="mt-[100px] py-10">
      <p className="text-[40px] text-center">Топ Продаж</p>
      <div className="my-10 flex justify-center gap-10 w-[80%] mx-auto">
        {bestSellingProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white w-[28%] overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              className="w-[70%] mx-auto object-cover"
              src={item.url}
              alt=""
            />
            <div className="bg-orange-300 overflow-hidden rounded-full p-3 ml-auto w-fit">
              <img
                className=""
                width="32"
                height="32"
                src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
                alt="shopping-cart--v1"
              />
            </div>
            <div className="p-3 text-center">
              <h1 className="font-semibold text-xl mb-3">{item.title}</h1>
              <p className="leading-7 mb-2">{item.description}</p>
              <h1 className="font-semibold">{item.price}$</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
