import React, { useEffect, useState } from 'react'
import Container from './container'
import CardCustom from './custom/card_custom'
import Combobox from './custom/combo_sort'
import FilterAccordion from './custom/filter_accordion'

const sortOptions = [
    { value: "asc", label: "По возрастанию" },
    { value: "desc", label: "По убыванию" },
    { value: "newest", label: "Сначала новые" },
    { value: "oldest", label: "Сначала старые" },
]

const CarList = () => {
    const [filters, setFilters] = useState([])
    const [selectedFilters, setSelectedFilters] = useState({})
    const [cars, setCars] = useState([])

    useEffect(() => {
        // Установим фильтры
        setFilters([
            {
                key: "engine",
                label: "Двигатель",
                options: [
                    { id: "diesel", label: "Дизель" },
                    { id: "petrol", label: "Бензин" },
                    { id: "electric", label: "Электро" },
                ],
            },
            {
                key: "drive",
                label: "Привод",
                options: [
                    { id: "awd", label: "Полный" },
                    { id: "fwd", label: "Передний" },
                    { id: "rwd", label: "Задний" },
                ],
            },
            {
                key: "color",
                label: "Цвет",
                options: [
                    { id: "black", label: "Чёрный" },
                    { id: "white", label: "Белый" },
                    { id: "red", label: "Красный" },
                ],
            },
        ])

        // Установим список автомобилей
        setCars([
            { id: 1, title: "Toyota Camry", image: "/images/camry.jpg", price: "2 500 000 ₽" },
            { id: 2, title: "Kia K5", image: "/images/k5.jpg", price: "2 200 000 ₽" },
            { id: 3, title: "Hyundai Sonata", image: "/images/sonata.jpg", price: "2 300 000 ₽" },
            { id: 4, title: "Skoda Octavia", image: "/images/octavia.jpg", price: "2 000 000 ₽" },
            { id: 5, title: "Mazda 6", image: "/images/mazda6.jpg", price: "2 450 000 ₽" },
            { id: 6, title: "Volkswagen Passat", image: "/images/passat.jpg", price: "2 600 000 ₽" },
        ])
    }, [])

    const handleChange = (key, values) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [key]: values,
        }))
    }

    const handleResetFilters = () => {
        setSelectedFilters({})
    }

    const handleSelect = (value) => {
        // Обработка сортировки — добавь при необходимости
        console.log("Selected sort:", value)
    }

    return (
        <div className="bg-accent flex justify-center">
            <div className="py-10 px-4 md:py-20 md:px-0 w-full max-w-[1400px]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 md:mb-10 gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Автопарк</h1>
                    <Combobox
                        options={sortOptions}
                        onSelect={handleSelect}
                        defaultValue="desc"
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Filters block */}
                    <div className="w-full lg:w-80 bg-white rounded-lg">
                        <div className="m-6 flex flex-col justify-between h-full">
                            <div>
                                {filters.map((filter) => (
                                    <FilterAccordion
                                        key={filter.key}
                                        filter={filter}
                                        selected={selectedFilters[filter.key] || []}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                            <div>
                                <button className="mt-6 rounded-lg bg-primary hover:bg-primary/80 px-6 py-2 text-white text-center w-full cursor-pointer transition-colors duration-200">
                                    Продолжить
                                </button>
                                <button
                                    onClick={handleResetFilters}
                                    className="mt-4 px-6 py-2 text-center w-full hover:underline cursor-pointer"
                                >
                                    Очистить фильтры
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {cars.map((car) => (
                                <CardCustom
                                    key={car.id}
                                    title={car.title}
                                    image={car.image}
                                    price={car.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarList
