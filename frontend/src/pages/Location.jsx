import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const locationsData = [
  {
    id: 1,
    title: "АВАЙХОН",
    location: "Мирзо-Улугбекский район, массив Корасу-6, 19",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },

  {
    id: 2,
    title: "АЛГОРИТМ",
    location: "Чиланзарский район, улица сугалли ота, 56 дом",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },

  {
    id: 3,
    title: "АЛЬ-ХОРЕЗМИ",
    location: "Чиланзарский район, улица Аль-Хорезми,66/7",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },

  {
    id: 4,
    title: "АНДИЖАН",
    location: "город Андижан, улица Машраба",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },
  {
    id: 5,
    title: "АРДУС",
    location: "Массив Кашгар,5А. Первый этаж жилого комплекса Амир Темур",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },
  {
    id: 6,
    title: "АХМАД",
    location: "Учтепинский район, массив Чиланзар, 31 квартал,11",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },
  {
    id: 7,
    title: "АЭРОПОРТ",
    location: "Малая кольцевая дорога",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },
  {
    id: 8,
    title: "БУНЁДКОР",
    location: "Чиланзарский район, массив Чиланзар,17 квартал, 33/1",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },
  {
    id: 9,
    title: "ВАТАН",
    location: "Учтепинский район, 24 квартал, улица Лутфий",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },
  {
    id: 10,
    title: "ВОДНИК",
    location: "Бектемирский район, улица Хусейна Байкары,37/1",
    Number: "78-113-40-40",
    worktime: "08:00-23:00",
  },
];

const Location = () => {
  const [locations, setLocations] = useState(locationsData);

  const filterLocations = (text) => {
    setLocations(
      locationsData.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <Layout>
      <div className="flex flex-col justisy-center text-center items-center">
        <input
          type="text"
          placeholder="Введите название торта"
          onChange={(e) => {
            filterLocations(e.target.value);
          }}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="p-3 text-center flex flex-col items-center justify-center">
        {locations.map((item) => (
          <Link
            to={`/location/${item.id}`}
            className="bg-white w-[40%] overflow-hidden rounded-2xl"
            key={item.id}
          >
            <div className="bg-white w-full overflow-hidden rounded-2xl p-3 shadow-lg  my-3 mt-10">
              <h1 className="font-semibold text-xl mb-3">{item.title}</h1>
              <p className="leading-7 mb-2">{item.location}</p>
              <div className="gap-11 flex justify-center">
                <div>
                  <p className="font-semibold text-xl text-stone-300">
                    Номер телефона:
                  </p>
                  <h1 className="">{item.Number}</h1>
                </div>
                <div>
                  <p className="font-semibold text-xl text-stone-300">
                    Режим работы:
                  </p>
                  <h1 className="">{item.worktime}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Location;
