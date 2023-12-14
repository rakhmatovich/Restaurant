import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: "100.000", quantity: 1 },
    { id: 2, name: "Product 2", price: "15.000", quantity: 1 },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const plus = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const minus = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const Remove = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // const empty = () => {
  //   if (cartItems.length === 0) {
  //     return <p>Ничего не найдено</p>;
  //   }

  return (
    <div className="p-12">
      {cartItems.length  === 0 ? (
        <h2 className="text-2xl font-bold mb-4">Ничего не найдено</h2>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Корзина</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <div>
                <p className=" flex font-bold">{item.name}</p>
              </div>
              <div>
                <h1 className="font-bold">Цена</h1>
                <p className=" text-gray-500">{item.price}Сум</p>
              </div>
              <div className="flex items-center bg-gray-500 rounded-full">
                <button onClick={() => minus(item.id)} className="mx-2">
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button onClick={() => plus(item.id)} className="mx-2 ">
                  +
                </button>
              </div>
              <button
                onClick={() => Remove(item.id)}
                className="rounded-full mx-2 px-2 bg-lime-800 text-white ml-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <p className="text-xl font-bold">Итог:{getTotalPrice()}Сум</p>
      </div>
    </div>
  );
};

export default Cart;
