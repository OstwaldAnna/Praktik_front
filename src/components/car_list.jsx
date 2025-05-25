import React, { useEffect, useState } from "react";
import Container from "./container";
import CardCustom from "./custom/card_custom";
import Combobox from "./custom/combo_sort";
import FilterAccordion from "./custom/filter_accordion";
import { fetchFilterOptions, fetchCars, fetchFilteredCars } from "../Api";

const sortOptions = [
  { value: "asc", label: "По возрастанию" },
  { value: "desc", label: "По убыванию" },
  { value: "newest", label: "Сначала новые" },
  { value: "oldest", label: "Сначала старые" },
];

const CarList = () => {
  const [sortOrder, setSortOrder] = useState("desc");
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch((err) => console.error("Ошибка загрузки машин:", err));
  }, []);

  useEffect(() => {
    fetchFilterOptions()
      .then((data) => {
        const transformedFilters = [
          {
            key: "body_type_id",
            label: "Тип кузова",
            options: data.body_types.map((item) => ({
              id: item.id.toString(),
              label: item.name,
            })),
          },
          {
            key: "fuel_type_id",
            label: "Тип топлива",
            options: data.fuel_types.map((item) => ({
              id: item.id.toString(),
              label: item.name,
            })),
          },
          {
            key: "drive_id",
            label: "Привод",
            options: data.drive_types.map((item) => ({
              id: item.id.toString(),
              label: item.name,
            })),
          },
          {
            key: "transmission_id",
            label: "Коробка передач",
            options: data.transmission_types.map((item) => ({
              id: item.id.toString(),
              label: item.name,
            })),
          },
          {
            key: "interior_id",
            label: "Интерьер",
            options: data.interior_types.map((item) => ({
              id: item.id.toString(),
              label: item.name,
            })),
          },
          {
            key: "engine_id",
            label: "Двигатель",
            options: data.engine_types.map((item) => ({
              id: item.id.toString(),
              label: item.name,
            })),
          },
          {
            key: "cruise_control",
            label: "Круиз-контроль",
            options: [
              { id: "true", label: "Да" },
              { id: "false", label: "Нет" },
            ],
          },
        ];
        setFilters(transformedFilters);
      })
      .catch((err) => {
        console.error("Ошибка загрузки фильтров", err);
      });
  }, []);

  const handleChange = (key, values) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: values,
    }));
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
  };

  const handleSelect = (value) => {
    setSortOrder(value);

    setCars((prevCars) => {
      const sorted = [...prevCars];

      switch (value) {
      case "asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "oldest":
        sorted.sort((a, b) => a.id - b.id);
        break;
      default:
        return sorted;
      }

      return sorted;
    });
  };

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
                <button
                  onClick={async () => {
                    try {
                      const filtered = await fetchFilteredCars(selectedFilters);
                      setCars(filtered);
                    } catch (err) {
                      console.error("Ошибка при фильтрации:", err);
                    }
                  }}
                  className="mt-6 rounded-lg bg-primary hover:bg-primary/80 px-6 py-2 text-white text-center w-full cursor-pointer transition-colors duration-200"
                >
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
                  id={car.id}
                  title={car.name}
                  image={car.url_image}
                  price={`${car.price.toLocaleString()} `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
