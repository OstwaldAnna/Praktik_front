import React from 'react'
import Container from './container'
import MainInput from './custom/main_input'
import { Clipboard, Navigation } from 'lucide-react'

const ProductCar = () => {
  // Данные об автомобиле
  const car = {
    name: 'Toyota Camry',
    year: 2023,
    pricePerDay: 20000,
    image: '#', // замените на путь к изображению
    total: 3700,
    specs: [
      { label: 'Двигатель', value: '2.5 л, 181 л.с.' },
      { label: 'Год', value: '2023' },
      { label: 'Привод', value: 'Передний' },
      { label: 'Коробка', value: 'Автомат' },
      { label: 'Тип кузова', value: 'Седан' },
      { label: 'Салон', value: 'Кожа, чёрный' },
      { label: 'Объем бака', value: '60 л' },
      { label: 'Топливо', value: 'Бензин АИ-95' },
      { label: 'Круиз-контроль', value: 'Адаптивный' },
      { label: 'Максимальная скорость', value: '210 км/ч' },
      { label: 'Расход топлива', value: '10 / 6.5 / 8.2 л' },
    ],
  }

  return (
    <Container className="py-10 px-4 md:py-24 md:px-28">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 md:text-left">
        {car.name}, {car.year}
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <img
          className="w-full max-w-full h-[430px] w-[600px] bg-black rounded-lg object-cover"
          src={car.image}
          alt={`Фото автомобиля ${car.name}`}
        />

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl md:text-4xl font-bold">Аренда</h2>
          <h2 className="text-lg md:text-2xl">
            <strong>от {car.pricePerDay.toLocaleString()}₽</strong> / сутки
          </h2>

          {/* Поля ввода */}
          {['Начало аренды', 'Конец аренды'].map((placeholder, index) => (
            <div
              key={index}
              className="bg-accent relative w-full text-center rounded-lg"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Clipboard />
              </span>
              <MainInput className="pl-10 py-2 w-full" placeholder={placeholder} />
            </div>
          ))}

          {/* Поле выбора места */}
          <div className="bg-accent relative w-full text-center rounded-lg">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Navigation />
            </span>
            <MainInput className="pl-10 py-2 w-full" placeholder="Выбрать место" />
          </div>

          {/* Кнопка */}
          <button className="mt-6 rounded-lg bg-primary hover:bg-primary/80 px-6 py-2 text-white text-center w-full cursor-pointer transition-colors duration-200">
            Заказать
          </button>

          {/* Итого */}
          <div className="flex justify-between">
            <h2 className="text-lg md:text-2xl font-bold">Итого</h2>
            <h2 className="text-lg md:text-2xl font-bold">{car.total}₽</h2>
          </div>

          {/* Характеристики */}
          <div>
            <h1 className="text-2xl md:text-5xl font-bold mt-6 mb-4">Характеристики</h1>
            <div className="text-[#0F172A] opacity-80 flex flex-col gap-2 mt-4 text-sm">
              {car.specs.map((spec, index) => (
                <span key={index}>
                  {spec.label}: {spec.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductCar
