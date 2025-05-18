import React from 'react'
import Container from './container';

const Hero = () => {
  return (
    <div className="text-center lg:mt-24 sm:mt-10 flex flex-col items-center px-4">
      <Container>
      <div className="text-center w-full  ">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
          Самый большой автопарк Москвы
        </h1>
        <p className="text-[#0F172A] mt-6 opacity-80 text-sm sm:text-base">
          Мы предлагаем аренду автомобилей, которые идеально подойдут для любых вкусов и предпочтений.
          У нас вы найдете авто для любой ситуации и настроения, от экономичных до роскошных моделей.
          Наслаждайтесь комфортом и свободой передвижения с нашей широкой линейкой транспортных средств.
        </p>
        <button className="mt-6 rounded-lg bg-primary hover:bg-primary/80 px-6 py-2 text-white text-center  cursor-pointer transition-colors duration-200">Начать пользоваться</button>
      </div>

      <div className="relative mt-12 sm:mt-24 w-full max-w-[1440px]">
        <img src="/map.png" className="w-full h-auto object-cover" alt="Map" />
        <img src="/Car1.png" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] sm:w-[50%] md:w-[40%] lg:w-[70%]" alt="Car"/>
      </div>
      </Container>
    </div>
  )
}

export default Hero
