import React from 'react'
import Container from './container'
import CardCustom from './custom/card_custom'
import { useEffect, useState } from 'react'
import { fetchCars } from '../Api'

const Car_park = () => {

    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        fetchCars()
          .then(data => setCars(data))
          .catch(err => console.error('Ошибка загрузки машин:', err));
      }, []);

    return (
        <div className="bg-accent">
            <Container className="py-20 px-4 sm:px-12">
                <h1 className="text-3xl sm:text-5xl font-bold">Автопарк</h1>

                {/* Горизонтальная прокрутка на мобилке, сетка на больших экранах */}
                <div className="mt-10 overflow-x-auto sm:overflow-visible">
                    <div className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 min-w-[600px] sm:min-w-0">
                        {cars.slice(0,8).map((car) => (
                            <CardCustom id={car.id} title={car.name} image={car.url_image} price={`${car.price.toLocaleString()} `} />
                        ))}
                    </div>
                </div>

                {/* Кнопка "Смотреть все" по центру */}
                <div className="mt-6 flex justify-center">
                    <a
                        href="/auto"
                        className="mt-6 rounded-lg bg-primary hover:bg-primary/80 px-6 py-2 text-white text-center cursor-pointer transition-colors duration-200"
                    >
                        Смотреть все
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Car_park;
