import React, { useState } from 'react';
import Layout from '../components/Layout';

const OrderForm = () => {
  const [deliveryOption, setDeliveryOption] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [locationSelect, setLocationSelect] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [comment, setComment] = useState('');

  const [delivery, setDelivery] = useState(true)

  const handleSubmit = () => {

  };

  return (
    <Layout>
      <div className="flex justify-between mt-24 mx-20 font-sans" style={{ fontFamily: "'Circe', sans-serif" }}>
        <div className="w-1/2">
          <h1 className="text-xl font-semibold mb-10" style={{ marginBottom: '2.5rem', fontSize: '1.75rem', fontWeight: 500 }}>
            ОФОРМЛЕНИЕ ЗАКАЗА
          </h1>

          <div className="mb-12 w-full flex gap-10">
            <button
              onClick={() => setDelivery(true)}
              className={`${!delivery ? 'bg-yellow-50 text-black border-2 border-orange-900' : 'bg-orange-300 text-white'} flex-1 hover:text-orange-700 transition duration-300  py-3 rounded-full`}>
              доставка
            </button>
            <button
              onClick={() => setDelivery(false)}
              className={`${delivery ? 'bg-yellow-50 text-black border-2 border-orange-900' : 'bg-orange-300 text-white'} flex-1  hover:text-orange-700 transition duration-300 py-3 rounded-full`}>
              самовызов
            </button>
          </div>

          <div className="flex mb-5">
            <div className="flex flex-col items-center">
              <label className="mb-1">ФИО</label>
              <input
                className="border border-gray-300 rounded-xl mb-1 w-80 pr-[2rem] pl-[2rem] py-3"
                type="text"
                placeholder=""
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center ml-8">
              <label className="mb-1">Номер</label>
              <input
                className="border border-gray-300 rounded-xl mb-2 w-80 px-[2rem] py-3"
                type="tel"
                placeholder=""
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          {delivery ?
            <>
              <div className="mb-10">
                <iframe
                  title='location'
                  className="w-full h-48 mb-4"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.9364376835156!2d64.430252!3d39.76353549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50078e80fb306b%3A0xf5811f8cb8769d10!2sSafia!5e0!3m2!1sru!2s!4v1702119548501!5m2!1sru!2s"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"

                ></iframe>
              </div>
              <div className="form-container">
                <div className="form-input mb-5">
                  <label>Адрес</label>
                  <input
                    className="border border-gray-300 p-2 mb-5 w-full rounded-xl"
                    type="text"
                    placeholder="Введите адрес доставки"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-input mb-5">
                  <label>Ориентир</label>
                  <input
                    className="border border-gray-300 p-2 mb-5 w-full rounded-xl"
                    type="text"
                    placeholder="Введите ориентир"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}

                  />
                </div>
                <div className="form-input mb-5">
                  <label>Время доставки</label>
                  <input
                    className="border border-gray-300 p-2 mb-2 w-full rounded-xl"
                    type="text"
                    placeholder="Выберите время доставки"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                  />
                </div>
              </div>
            </>
            :
            <div className="form-input mb-5">
              <label className="block mb-2">Выберите филиал</label>
              <label className="block mb-5 mr-4 rounded-xl">
                <input
                  type="radio"
                  value="click"
                  checked={locationSelect === "click"}
                  onChange={() => setLocationSelect("click")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                Safia Бухара
              </label>
              <label>Время самовывоза</label>
              <input
                className="border border-gray-300 p-2 mb-2 w-full rounded-xl"
                type="text"
                placeholder="Выберите время самовывоза"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
            </div>

          }
          <div className="form-input">
            <label className="block mb-2">Выберите способ оплаты</label>
            <div className="flex flex-wrap">
              <label className="block mb-2 mr-4">
                <input
                  type="radio"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={() => setPaymentMethod("creditCard")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                НАЛИЧНЫЕ
              </label>

              <label className="block mb-2 mr-4">
                <input
                  type="radio"
                  value="payMe"
                  checked={paymentMethod === "payMe"}
                  onChange={() => setPaymentMethod("payMe")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                PAY-ME
              </label>

              <label className="block mb-2 mr-4">
                <input
                  type="radio"
                  value="click"
                  checked={paymentMethod === "click"}
                  onChange={() => setPaymentMethod("click")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                CLICK
              </label>

              <label className="block mb-2 mr-4">
                <input
                  type="radio"
                  value="uzumBank"
                  checked={paymentMethod === "uzumBank"}
                  onChange={() => setPaymentMethod("uzumBank")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                UzumBank
              </label>

              <label className="block mb-2 mr-4">
                <input
                  type="radio"
                  value="uzCardTerminal"
                  checked={paymentMethod === "uzCardTerminal"}
                  onChange={() => setPaymentMethod("uzCardTerminal")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                ТЕРМИНАЛ UzCard
              </label>

              <label className="block mb-2 mr-4">
                <input
                  type="radio"
                  value="humoTerminal"
                  checked={paymentMethod === "humoTerminal"}
                  onChange={() => setPaymentMethod("humoTerminal")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                ТЕРМИНАЛ HUMO
              </label>

              <label className="block mb-2 mr-4">
                <input
                  type="radio"
                  value="oson"
                  checked={paymentMethod === "oson"}
                  onChange={() => setPaymentMethod("oson")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                OSON
              </label>

              <label className="block mb-2 mr-4">
                <input
                  type="radio"
                  value="corporateGuest"
                  checked={paymentMethod === "corporateGuest"}
                  onChange={() => setPaymentMethod("corporateGuest")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                КОРПОРАТИ́ВНЫЙ ГОСТЬ
              </label>

              <label className="block mb-5 mr-4">
                <input
                  type="radio"
                  value="bonusPayment"
                  checked={paymentMethod === "bonusPayment"}
                  onChange={() => setPaymentMethod("bonusPayment")}
                  className="text-brown-500 focus:ring-brown-500"
                />
                Оплата бонусами
              </label>
            </div>
          </div>
          <div className="form-input mb-5 ">
            <label>Комментарий</label>
            <textarea
              className="border border-gray-300 p-2 mb-4 w-full rounded-xl"
              placeholder="Комментарий к заказу"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button className='bg-orange-300 text-white hover:text-orange-700 transition duration-300 pr-[7rem] pl-[7rem] mb-7 py-3 rounded-3xl mr-2'>
            Оформить заказ
          </button>
        </div>
        <div class="md:mx-4 md:w-1/3">
          <div class="p-4 bg-white shadow-md rounded-md mb-8">
            <h4 class="text-lg font-semibold mb-4">Ваш заказ:</h4>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div className='w-1/3'>
                  <img src="https://safiabakery.uz/uploads/products/thumbs/no-photo.jpg" alt="" />
                </div>
                <div class="w-2/3 space-y-2">
                  <div class="font-medium">Блэк форест тарталетка</div>
                  <div class="text-sm text-gray-500"></div>
                  <div class="font-semibold">1 x 22000.00 = 22 000 сум</div>
                </div>
              </div>
            </div>
            <div class="mt-4 border-t pt-4">
              <div class="flex justify-between items-center mb-2">
                <div class="text-sm text-gray-500">Стоимость доставки:</div>
                <div class="font-semibold">0 сум</div>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">Всего к оплате:</div>
                <div class="font-semibold">22 000 сум</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderForm;