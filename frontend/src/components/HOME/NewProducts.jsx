import React from "react";

const bestSellingProducts = [
  {
    id: 1,
    title: "Паин шоколадный заварной",
    description:
      "Паин шоколадный заварной - из слоеного дрожжевого теста",
    price: "2",
    url: "https://safiabakery.uz/uploads/products/thumbs/171_1698217025.png",
  },
  {
    id: 2,
    title: "Слойка с ананасами",
    description:
      "Слойка с ананасами - из слоеного дрожжевого теста, с ананасами",
    price: "1,6",
    url: "	https://safiabakery.uz/uploads/products/thumbs/171_1698216937.png",
  },
  {
    id: 3,
    title: "Слойка с сосиской",
    description: "Слойка с сосиской из слоеного дрожжевого теста с сосиской.",
    price: "1.6",
    url: "	https://safiabakery.uz/uploads/products/thumbs/171_1698217199.png",
  },
];

export default function NewProducts() {
  return (
    <div className="mt-[100px]">
      <p className="text-[40px] text-center">Новинки</p>
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
