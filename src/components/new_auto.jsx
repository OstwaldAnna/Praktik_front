import React from 'react'
import Container from './container'
import { useEffect, useState } from 'react'
import { fetchCars } from '../Api'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardCustom from './custom/card_custom'

const New_auto = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars()
      .then(data => setCars(data))
      .catch(err => console.error('Ошибка загрузки машин:', err));
  }, []);

  return (
    <div className="bg-accent">
      <Container className="py-10 px-4 sm:px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-center sm:text-left">Новые автомобили</h1>
        <div className="w-full">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {cars.map((car) => (
                <CarouselItem key={car.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    {/*  id, title, image, price, engine, year, drive, transmission  */}
                    <CardCustom id={car.id} title={car.name} image={car.url_image} price={`${car.price.toLocaleString()} `} engine={car.engine.name}
                    year={car.year} drive={car.drive.name} transmission={car.transmission.name} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Прячем стрелки на мобильных */}
            <div className="hidden sm:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  )
}

export default New_auto
