import React, { useState } from 'react';
import Layout from '../components/Layout';
import axios from "axios";
import { useEffect } from "react";
import { CATEGORIES } from "../utils/urls";
import { PRODUCTS } from '../utils/urls';

export default function Menu() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(CATEGORIES)
      .then(response => {
        setCategories(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });

    loadProducts()
  }, []);

  const loadProducts = () => {
    axios.get(PRODUCTS)
      .then(res => setProducts(res.data.data))
      .catch(console.error)
  }

  console.log(products);

  return (
    <Layout>
      <div className="relative">
        <img src="https://safiabakery.uz/img/group-bg.jpg" alt="" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold opacity-100">НОВЫЙ ГОД</h1>
        </div>
      </div>
      <br />
      <br />

      <div className="w-[90%] mx-auto my-14">
        <p className='mx-4 text-xl font-medium mb-5'>Выбирайте категорию</p>

        <div className="mb-4">
          {categories?.map(category => (
            <button
              key={category.id}
              className='bg-orange-300 hover:text-orange-700 transition duration-300 pr-[2rem] pl-[2rem] py-2 rounded-3xl mb-4 mx-2'>
              {category.attributes.title}
            </button>
          ))}
        </div>
      </div>
      <header className="bg-orange-200 text-white p-4">
        <h1 className="text-4xl font-bold flex items-center justify-center">
          Новый год
        </h1>
      </header>
      <br />
      <br />

      <div className="container mx-auto">
        {products?.map(product => (
          <div className="flex overflow-x-auto space-x-12 pl-7 pr-7" key={product.id}>
            <div className="flex flex-col items-center">
              <div>
                <a href="/ru/menu/kruglie-torti-2024" title="Круглые торты 2024">
                  <img
                    src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                    alt="Круглые торты 2024"
                    className="w-[196px] h-[196px] object-cover lazyload rounded-full"
                  />
                </a>
              </div>
              <div className="mt-2">
                <a href="/ru/menu/kruglie-torti-2024" className="text-center">Круглые торты 2024</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      <div className="flex justify-center">
        <div className="w-1/2 mb-9">
        </div>
      </div>
    </Layout>
  );
}
