
import { getApiURL } from '../../Api';
import React from 'react';


const CardCustom = ({ id, title, image, price, engine, year, drive, transmission }) => {
  return (
    <div className="bg-white rounded-lg min-w-[300px]">
      <a href={`/productcar/${id}`}>
        <img className="h-[280px] w-full object-cover bg-black"   src={image.startsWith('/static/') ? `${getApiURL()}${image}` : image} alt={title} />
        <div className="mt-4 mx-4">
          <p className="font-bold text-base">{title}</p>
          <div className="text-[#0F172A] opacity-80 flex flex-col gap-2 mt-4 text-sm">
            <span>Двигатель: {engine}</span>
            <span>Год: {year}</span>
            <span>Привод: {drive}</span>
            <span>Коробка: {transmission}</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-stroke my-4"></div>
        <p className="text-xl pb-4 pl-4 pr-12">
          <strong>от {price}₽</strong> / сутки
        </p>
      </a>
    </div>
  );
};

export default CardCustom;
