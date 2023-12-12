import React from "react";
import Layout from "../components/Layout";

function App() {
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="./img/backgroundimg.png"
        alt=""
        style={{ marginBottom: "auto" }}
      />

      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-[44%]">
            <h1 className="text-[1.25rem]">НАША ИСТОРИЯ</h1>
            <p className="text-[1.125rem] font-[300] my-[20px]">
              История создания популярного производителя сладостей и выпечки,
              завоевавшего славу, благодаря мечте создать кондитерскую культуру
              в Узбекистане, и большой любви к общему, семейному делу.
            </p>
          </div>
          <img
            className="w-[480px] object-cover rounded-full h-[480px]"
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

export default App;
