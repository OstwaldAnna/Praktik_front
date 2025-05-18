import React from 'react'
import Container from './container'
import CardCustom from './custom/card_custom'

const Car_park = () => {
    const cars = [
        {
            name: 'Toyota Camry',
            engine: '2.5L',
            year: '2022',
            drive: 'Передний',
            transmission: 'Автомат',
            price: '4 000',
            image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
        },
        // {
        //     name: 'BMW X5',
        //     engine: '3.0L',
        //     year: '2021',
        //     drive: 'Полный',
        //     transmission: 'Автомат',
        //     price: '7 000',
        //     image: 'https://via.placeholder.com/300x200?text=X5',
        // },
        // {
        //     name: 'Kia Rio',
        //     engine: '1.6L',
        //     year: '2023',
        //     drive: 'Передний',
        //     transmission: 'Механика',
        //     price: '2 500',
        //     image: 'https://via.placeholder.com/300x200?text=Rio',
        // },
        // {
        //     name: 'Hyundai Sonata',
        //     engine: '2.0L',
        //     year: '2020',
        //     drive: 'Передний',
        //     transmission: 'Автомат',
        //     price: '3 500',
        //     image: 'https://via.placeholder.com/300x200?text=Sonata',
        // },
    ];

    return (
        <div className="bg-accent">
            <Container className="py-20 px-4 sm:px-12">
                <h1 className="text-3xl sm:text-5xl font-bold">Автопарк</h1>

                {/* Горизонтальная прокрутка на мобилке, сетка на больших экранах */}
                <div className="mt-10 overflow-x-auto sm:overflow-visible">
                    <div className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 min-w-[600px] sm:min-w-0">
                        {cars.map((car, index) => (
                            <CardCustom key={index} car={car} />
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
