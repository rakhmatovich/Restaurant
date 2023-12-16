import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

export default function Headericon() {
  return (
    <div className="w-full py-5 bg-[#BEA087] relative">
      <div className="flex gap-8 items-center justify-center">
        <div className="absolute left-28 text-center">
          <div className="p-2 bg-gray-500 rounded-full">
          <GoKebabHorizontal size={28} />
          </div>
          <span>Menu</span>
        </div>
        <div className="space-x-4 hover:underline">
          <img
            width="32"
            className="mx-auto"
            height="32"
            src="https://img.icons8.com/pastel-glyph/64/birthday.png"
            alt="birthday"
          />
          Круглые торты
        </div>
        <div className="space-x-4 hover:underline">
          <img
            width="32"
            className="mx-auto"
            height="32"
            src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/external-cake-carnival-icongeek26-outline-icongeek26.png"
            alt="external-cake-carnival-icongeek26-outline-icongeek26"
          />
          Большые торты
        </div>
        <div className="space-x-4 hover:underline">
          <img
            className="justify-center mx-auto"
            width="32"
            height="32"
            src="https://img.icons8.com/wired/64/cake.png"
            alt="cake"
          />
          Пирожные
        </div>
        <div className="space-x-4 hover:underline">
          <img
            width="32"
            className="mx-auto"
            height="32"
            src="https://img.icons8.com/ios/50/cookies.png"
            alt="cookies"
          />
          Печеьнья
        </div>
        <div className="space-x-4 hover:underline">
          <img
            width="32"
            className="mx-auto"
            height="32"
            src="https://img.icons8.com/dotty/80/croissant.png"
            alt="croissant"
          />
          Слоеная выпечка
        </div>
      </div>
    </div>
  );
}
