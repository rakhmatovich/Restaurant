import React, { useState } from "react";
import Layout from "../components/Layout";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: "10", quantity: 1, image: "" },
    { id: 2, name: "Product 2", price: "25", quantity: 1 },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total * (item.price || 0) + item.quantity,0);
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

  return (
    <Layout>
      <div className="p-12">
        {cartItems.length === 0 ? (
          <>
            <h2 className="text-2xl text-center font-bold mb-4">
              Нечего не найдено
            </h2>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Корзина</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div class="p-4 bg-white shadow-md rounded-md mb-8">
                  <h4 class="text-lg font-semibold mb-4">Ваш заказ:</h4>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-4">
                      <div className="w-1/3"></div>
                      <div class="w-2/3 space-y-2">
                        <div class="font-medium"></div>
                        <div class="text-sm text-gray-500"></div>
                        <div class="font-semibold"></div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 border-t pt-4">
                    <div class="flex justify-between items-center">
                      <div class="text-sm text-gray-500">Всего к оплате:</div>
                      <div class="font-semibold">${getTotalPrice()}</div>
                    </div>
                  </div>
                </div>
                <div className="  py-2 px-3  bg-amber-600 rounded-full">
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
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">Итог:${getTotalPrice()}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
