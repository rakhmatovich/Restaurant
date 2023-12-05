import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-[40px] text-center font-semibold text-cyan-500">
        Asian
      </h1>
      <div className="bg-orange-100 text-center flex space-x-8 justify-center items-center h-24 w-full">
        <div className="mr-64">
          <img
            width="32"
            height="32"
            className="mx-auto"
            src="https://img.icons8.com/ios/50/menu--v1.png"
            alt="menu--v1"
          />
          Menu
        </div>

    <div>
      
    </div>

        <div className="space-x-4 text-gray-400 hover:text-white">
          <img
            width="32"
            className="mx-auto"
            height="32"
            src="https://img.icons8.com/pastel-glyph/64/birthday.png"
            alt="birthday"
          />
          Круглые торты
        </div>
        <div className="space-x-4 text-gray-400 hover:text-white">
          <img
            width="32"
            className="mx-auto"
            height="32"
            src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/external-cake-carnival-icongeek26-outline-icongeek26.png"
            alt="external-cake-carnival-icongeek26-outline-icongeek26"
          />
          Большые торты
        </div>
        <div className="space-x-4 text-gray-400 hover:text-white">
          <img
            className="justify-center mx-auto"
            width="32"
            height="32"
            src="https://img.icons8.com/wired/64/cake.png"
            alt="cake"
          />
          Пирожные
        </div>
        <div className="space-x-4 text-gray-400 hover:text-white">
          <img
            width="32"
            className="mx-auto"
            height="32"
            src="https://img.icons8.com/ios/50/cookies.png"
            alt="cookies"
          />
          Печеьнья
        </div>
        <div className="space-x-4 text-gray-400 hover:text-white">
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
      <br />

      <h1 className="text-[40px] text-center">Новинка</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-[40px] text-center">Топ продаж</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="text-[40px] text-center ">Наши Ценности</p>
      <br />
      <br />
      <br />
      <br />
      <div className="flex text-center space-x-6 center justify-center items-center gap-12">
        <div className="bg-white h-48  w-48 overflow-hidden  rounded-2xl">
          <img
            width="50"
            height="50"
            className="mx-auto"
            src="https://img.icons8.com/ios-filled/50/sunflower.png"
            alt="sunflower"
          />
          <br />
          <h1>Окружаюшея среда</h1>
          <br />
          <p>Asia заботиться о будущем</p>
        </div>
        <div className="bg-white h-48  w-48 overflow-hidden  rounded-2xl">
          <img
            width="50"
            height="50"
            className="mx-auto"
            src="https://img.icons8.com/ios/50/family--v1.png"
            alt="family--v1"
          />
          <br />
          <h1>Семья</h1>
          <br />
          <p>Сохраняя семейные ценности делаем жизнь людей праздником</p>
        </div>
        <div className="bg-white h-48 w-48 overflow-hidden  rounded-2xl">
          <img
            width="50"
            height="50"
            className="mx-auto"
            src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/external-together-friendship-wanicon-lineal-wanicon.png"
            alt="external-together-friendship-wanicon-lineal-wanicon"
          />
          <br />
          <h1>Инклюзия</h1>
          <br />
          <p>Равные возможности для всех</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-[40px] text-center">О Нас</h1>
      <br />
      <br />
      <br />
      <div className="flex mr-40 space-x-32 gap-12 text-center justify-center items-center">
        <div className="ml-40 rounded-2xl overflow-hidden">
          <img
            className="rounded-2xl overflow-hidden h-full w-full"
            src=" https://place.lemma.ru/storage/resize/20200629/37c95b15a1be8a41e19761b45769af34xwide_1920x800.jpeg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[40px]">Наша История</h1>
          <br />
          <br />
          <p className=" mx-auto">
            Сеть кондитерских Safia – семейное предприятие, история которого
            начинается с кондитера-любителя Мухаё Аюповой. Большое трудолюбие и
            любовь к домашней выпечке побудили ее в 2001 году выйти за рамки
            семейной кухни и начать печь на продажу, сперва – для родственников,
            друзей и соседей. Супруг, Акмаль Аюпов, поддерживает творческое
            начинание Мухаё и организует доставку готовых изделий.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="text-[40px] text-center">
        Можете писать нам если есть проблемы
      </h1>
      <br />
      <br />
      <br />
      <div className="flex justify-center space-x-64 gap-12">
        <div>
          <a
            target="_blank"
            href="https://instagram.com/asianrestaurant?igshid=NzZlODBkYWE4Ng=="
            className=""
          >
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/external-developer-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png"
              alt="external-developer-basic-ui-elements-2.2-sbts2018-solid-sbts2018"
            />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://instagram.com/this_is_abu_x?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            className=""
          >
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/external-developer-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png"
              alt="external-developer-basic-ui-elements-2.2-sbts2018-solid-sbts2018"
            />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://instagram.com/uzbfearless?igshid=NGVhN2U2NjQ0Yg=="
            className=""
          >
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/external-developer-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png"
              alt="external-developer-basic-ui-elements-2.2-sbts2018-solid-sbts2018"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}
