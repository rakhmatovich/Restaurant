import React from "react";
import Layout from "../components/Layout";

function AboutUs() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full h-[70vh] bg-center bg-[url('https://safiabakery.uz/uploads/pages/pb_1680769318.jpg')]">
          <div className="w-full h-full bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-5xl">O нас</h1>
          </div>
        </div>

        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-[44%]">
              <h1 className="text-[1.25rem]">НАША ИСТОРИЯ</h1>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                История создания популярного производителя сладостей и выпечки,
                завоевавшего славу, благодаря мечте создать кондитерскую
                культуру в Узбекистане, и большой любви к общему, семейному
                делу.
              </p>
              <button className="bg-orange-300 hover:text-orange-700 transition duration-300 pr-[2rem] pl-[2rem] py-2 rounded-3xl">
                подробнее
              </button>
            </div>
            <img
              className="w-[480px] mt-[100px] object-cover rounded-full h-[480px]"
              loading="lazy"
              src="https://safiabakery.uz/uploads/pages/page_1672066470.jpg"
              alt=""
            />
          </div>

          <div className="flex justify-between items-center my-28">
            <img
              className="w-[480px] object-cover rounded-full h-[480px]"
              loading="lazy"
              src="https://safiabakery.uz/uploads/pages/page_1672055055.jpg"
              alt=""
            />
            <div className="w-[44%] text-right">
              <h1 className="text-[1.25rem]">НАШИ ДОСТИЖЕНИЯ</h1>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                Результат работы нашего коллектива отражает решения и стремления
                нашей команды в целом. В свою очередь, наши достижения являются
                стимулом для дальнейшего развития нашей работы.
              </p>
              <button className="bg-orange-300 hover:text-orange-700 transition duration-300 pr-[2rem] pl-[2rem] py-2 rounded-3xl">
                подробнее
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-20">
            <div className="w-[44%]">
              <h1 className="text-[1.25rem]">SAFIA STORE</h1>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                С целью быть еще ближе к нашимгостям мы запустили
                лимитированнуюколлекцию на нашей странице Safia Store. В нашей
                коллекции мы отразиличастичку индивидуальности длякаждого, чтобы
                вы стали частью нашейбольшой и дружной семьи!{" "}
              </p>
              <button className="bg-orange-300 hover:text-orange-700 transition duration-300 pr-[2rem] pl-[2rem] py-2 rounded-3xl">
                подробнее
              </button>
            </div>
            <img
              className="w-[480px] object-cover rounded-full h-[480px]"
              loading="lazy"
              src="https://safiabakery.uz/uploads/pages/page_1671111750.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
