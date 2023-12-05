import React from 'react'

export default function Product({image, title, description, price}) {
  return (
    <div className="bg-white h-68  w-48 overflow-hidden  rounded-2xl">
    <img
      className="center h-40 w-full"
      src="https://img.freepik.com/premium-photo/two-halves-of-brazilian-honey-cakes-traditional-and-covered-in-white-chocolate-filled-with-dulce-de-lechewhite-background_292824-2022.jpg"
      alt=""
    />
    <div className=" bg-orange-300 overflow-hidden rounded-full w-14 h-14">
      <img
        className="mt-3 ml-3"
        width="32"
        height="32"
        src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
        alt="shopping-cart--v1"
      />
    </div>
    <br />
    <h1 className="text-center">Паин шоколадной заинкой</h1>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <h1 className="text-center">2$</h1>
  </div>

  )
}
