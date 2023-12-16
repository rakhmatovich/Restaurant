import React from 'react';
import Layout from '../components/Layout';

function App() {
  return (
    <Layout>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

        <div className="w-[90%] mx-auto my-14">
          <img src="https://safiabakery.uz/img/catering.png" alt="Placeholder" className="ml-5" />
          <div className="bg-gray-100 p-6 rounded-md">

            <img src="https://safiabakery.uz/img/ic_catering_call.svg" alt="Placeholder" className="rounded-full inline-block" />
            <img src="https://safiabakery.uz/img/ic_catering_telegram.svg" alt="Placeholder" className="rounded-full inline-block ml-5" />
            <img src="https://safiabakery.uz/img/ic_catering_instagram.svg" alt="Placeholder" className="rounded-full inline-block ml-5" />
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[44%]">
              <h1 className="text-[1.25rem]">SAFIA CATERING</h1>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                Это ваше мероприятие проведенное нами на высшем уровне! Мы предлагаем наши услуги как физическим, так и юридическим лицам. </p>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                Наши профессиональные шеф-повара и шеф - кондитеры обучались и повышали свою квалификацию в самых престижных кулинарных заведениях в Ташкенте и за рубежом. Опираясь на свой опыт наши кулинарные мастера смогут реализовать ваши персональные идеи, а также дать необходимые советы.</p>
            </div>
            <img
              className="w-[480px] object-cover rounded-full h-[480px]"
              loading="lazy"
              src="https://safiabakery.uz/uploads/pages/page_1680963127.png"
              alt=""

            />

          </div>

          <div className="flex justify-between items-center my-28">
            <img
              className="w-[480px] object-cover rounded-full h-[480px]"
              loading="lazy"
              src="https://safiabakery.uz/uploads/pages/page_1677593096.png"
              alt=""
            />
            <div className="w-[44%] text-right">
              <h1 className="text-[1.25rem]">НАШИ ПРЕИМУЩЕСТВА</h1>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                Учитывая ваши предпочтения, мы создадим незабываемое мероприятие от поиска места до его проведения. Комплекс услуг «мероприятия под ключ» включает в себя: подбор локации, создание индивидуального меню, состав развлекательной программы, предоставление мебели, техники и другого необходимого инвентаря.</p>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                У нас большая команда профессионалов-оформителей, фантазия и креативность которых не знает границ. Мы создадим уникальный дизайн под тематику вашего мероприятия, которое превзойдет все ваши ожидания.

              </p>
              <p className="text-[1.125rem] font-[300] my-[20px]">Качество и изысканный вкус – залог нашего успеха. Выбирая продукты мы всегда думаем о вас и об уровне проведения вашего мероприятия.
              </p>


            </div>
          </div>

          <div className="flex justify-between items-center mb-20">
            <div className="w-[44%]">
              <h1 className="text-[1.25rem]">НАШИ ПАРТНЕРЫ</h1>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                На протяжении 6 лет нам удалось создать огромное количество мероприятий разного формата.</p>
              <p className="text-[1.125rem] font-[300] my-[20px]">
                Нам посчастливилось сотрудничать с такими известными компаниями и брендами, как: Национальный банк Узбекистана, Asia alliance bank, World bank, Uztelecom, АГМК, Coca-cola Uzbekistan, British American Tobacco, Beeline Uzbekistan, Ucell, Humans и многие другие!</p>

            </div>
            <img
              className="w-[480px] object-cover rounded-full h-[480px]"
              loading="lazy"
              src="https://safiabakery.uz/uploads/pages/page_1677591961.png"
              alt=""
            />
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default App;