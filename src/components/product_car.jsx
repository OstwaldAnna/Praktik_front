import React from "react";
import Container from "./container";
import MainInput from "./custom/main_input";
import { Clipboard, Navigation } from "lucide-react";
import { fetchCars, getApiURL } from "../Api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Datepick from "./ui/datepick/datepick";

const ProductCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    fetchCars()
      .then((cars) => {
        const foundCar = cars.find((c) => c.id.toString() === id);
        setCar(foundCar);
      })
      .catch((err) => console.error("Ошибка при загрузке авто:", err));
  }, [id]);

  if (!car) return <div className="text-center py-20">Загрузка...</div>;

  const getTotalPrice = () => {
    if (!startDate || !endDate) return 0;
    const timeDiff = endDate.getTime() - startDate.getTime();
    if (timeDiff === 0) {
      return 1 * car.price;
    }
    const dayCount = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return dayCount > 0 ? dayCount * car.price : 0;
  };

  const totalPrice = getTotalPrice();

  return (
    <Container className="py-10 px-4 md:py-24 md:px-28">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 md:text-left">
        {car.name}, {car.year}
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <img
          className="w-full max-w-full h-[430px] w-[600px] bg-black rounded-lg object-cover"
          src={
            car.url_image.startsWith("/static/")
              ? `${getApiURL()}${car.url_image}`
              : car.url_image
          }
          alt={`Фото автомобиля ${car.name}`}
        />

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl md:text-4xl font-bold">Аренда</h2>
          <h2 className="text-lg md:text-2xl">
            <strong>от {car.price.toLocaleString()}₽</strong> / сутки
          </h2>

          {/* Поля ввода */}
          <div
            className="bg-accent relative w-full text-center rounded-lg border border-[#E2E8F0]
       transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Clipboard />
            </span>
            <div className="pl-10 py-2 w-full">
              <Datepick
                selectedDate={startDate}
                onChange={(date) => setStartDate(date)}
                placeholder="Начало аренды"
                minDate={new Date()}
              />
            </div>
          </div>

          <div
            className="bg-accent relative w-full text-center rounded-lg border border-[#E2E8F0]
       transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Clipboard />
            </span>
            <div className="pl-10 py-2 w-full">
              <Datepick
                selectedDate={endDate}
                onChange={(date) => setEndDate(date)}
                placeholder="Конец аренды"
                minDate={new Date()}
              />
            </div>
          </div>

          {/* Поле выбора места */}
          <div className="bg-accent relative w-full text-center rounded-lg">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Navigation />
            </span>
            <MainInput className="pl-10 py-[18px] w-full" placeholder="Адрес" />
          </div>

          {/* Кнопка */}
          <button className="mt-6 rounded-lg bg-primary hover:bg-primary/80 px-6 py-2 text-white text-center w-full cursor-pointer transition-colors duration-200">
            Заказать
          </button>

          {/* Итого */}
          <div className="flex justify-between">
            <h2 className="text-lg md:text-2xl font-bold">Итого</h2>
            <h2 className="text-lg md:text-2xl font-bold">{totalPrice.toLocaleString()}₽</h2>
          </div>

          {/* Характеристики */}
          <div>
            <h1 className="text-2xl md:text-5xl font-bold mt-6 mb-4">
              Характеристики
            </h1>
            <div className="text-[#0F172A] opacity-80 flex flex-col gap-2 mt-4 text-sm">
              <span>Двигатель: {car.engine?.name || "—"}</span>
              <span>Год: {car.year || "—"}</span>
              <span>Привод: {car.drive?.name || "—"}</span>
              <span>Коробка: {car.transmission?.name || "—"}</span>
              <span>Тип кузова: {car.body_type?.name || "—"}</span>
              <span>Салон: {car.interior?.name || "—"}</span>
              <span>
                Объем бака:{" "}
                {car.fuel_tank_capacity ? `${car.fuel_tank_capacity} л` : "—"}
              </span>
              <span>Топливо: {car.fuel_type?.name || "—"}</span>
              <span>Круиз-контроль: {car.cruise_control ? "Да" : "Нет"}</span>
              <span>
                Максимальная скорость:{" "}
                {car.max_speed ? `${car.max_speed} км/ч` : "—"}
              </span>
              <span>
                Расход топлива:{" "}
                {car.fuel_consumption ? `${car.fuel_consumption} л` : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductCar;
