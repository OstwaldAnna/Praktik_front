import React from 'react'
import Container from './container'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardCustom from './custom/card_custom'

const cars = [
  { id: 1, title: 'Toyota Camry', image: '/images/camry.jpg', price: '2 500 000 ₽' },
  { id: 2, title: 'Kia K5', image: '/images/k5.jpg', price: '2 200 000 ₽' },
  { id: 3, title: 'Hyundai Sonata', image: '/images/sonata.jpg', price: '2 300 000 ₽' },
  { id: 3, title: 'Hyundai Sonata', image: '/images/sonata.jpg', price: '2 300 000 ₽' },
  { id: 3, title: 'Hyundai Sonata', image: '/images/sonata.jpg', price: '2 300 000 ₽' },
  // другие авто
];

const New_auto = () => {
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
                    <CardCustom title={car.title} image={car.image} price={car.price} />
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
