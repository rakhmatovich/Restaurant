import React from 'react';
import Layout from '../components/Layout';


function Values() {
    return (
        <Layout>
           

            <img src="./img/backgroundimg2.png" alt="" style={{ marginBottom: 'auto' }} />
            <div className="w-[90%] mx-auto">
                <section className="flex justify-between items-center">
                    <div className="w-[40%]">
                        <div className="flex flex-col items-center justify-center">
                        </div>

                        <h1 className="text-[1.25rem]">ОКРУЖАЮЩАЯ СРЕДА</h1>
                        <p className="text-[1.125rem] font-[300] my-[20px]">
                            Нашей безусловной целью является - сохранить для будущего поколения стабильное и чистое будущее поддерживая экологию здесь и сейчас.</p>

                    </div>
                    <img
                        className="w-[480px] object-cover rounded-full h-[480px] my-40"
                        loading="lazy"
                        src="https://safiabakery.uz/uploads/pages/page_1679316092.png"
                        alt=""
                    />
                </section>

                <section className="flex justify-between items-center my-30">
                    <img
                        className="w-[480px] object-cover rounded-full h-[480px]"
                        loading="lazy"
                        src="https://safiabakery.uz/uploads/pages/page_1673269026.png"
                        alt=""
                    />
                    <div className="w-[44%] text-right">
                        <h1 className="text-[1.25rem]">СЕМЬЯ</h1>
                        <p className="text-[1.125rem] font-[300] my-[20px]">
                            Мы любим своё дело! Сохраняя семейные ценности, мы развиваем кондитерское искусство. Мы создаем для каждого человека и семьи праздник! Мы любим наших гостей и гарантируем продукцию из натуральных ингредиентов высшего качества.</p>
                    </div>
                </section>

                <section className="flex justify-between items-center mb-20">
                    <div className="w-[44%]">
                        <h1 className="text-[1.25rem]">ИНКЛЮЗИЯ</h1>
                        <p className="text-[1.125rem] font-[300] my-[20px]">
                            Предоставление рабочих мест и условий с заботой о каждом! </p>
                    </div>
                    <img
                        className="w-[480px] object-cover rounded-full h-[480px]"
                        loading="lazy"
                        src="https://safiabakery.uz/uploads/pages/page_1672128875.png"
                        alt=""
                    />
                </section>
            </div>

        </Layout>
    );
}

export default Values;
