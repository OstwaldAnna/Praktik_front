
import React from 'react';

const CardCustom = () => {


  const car = {
    name: 'Toyota Camry',
    engine: '2.5L',
    year: '2022',
    drive: 'Передний',
    transmission: 'Автомат',
    price: '4 000',
    image: 'https://avatars.mds.yandex.net/i?id=2e7f26d6f7dd704df7d209a5e0e7c54c_l-11547894-images-thumbs&n=13',
  }

  return (
    <div className="bg-white rounded-lg min-w-[300px]">
      <a href="/productcar">
        <img className="h-[280px] w-full object-cover bg-black" src={car.image} alt={car.name} />
        <div className="mt-4 mx-4">
          <p className="font-bold text-base">{car.name}</p>
          <div className="text-[#0F172A] opacity-80 flex flex-col gap-2 mt-4 text-sm">
            <span>Двигатель: {car.engine}</span>
            <span>Год: {car.year}</span>
            <span>Привод: {car.drive}</span>
            <span>Коробка: {car.transmission}</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-stroke my-4"></div>
        <p className="text-xl pb-4 pl-4 pr-12">
          <strong>от {car.price}₽</strong> / сутки
        </p>
      </a>
    </div>
  );
};

export default CardCustom;
