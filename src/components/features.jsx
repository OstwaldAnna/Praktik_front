import React from 'react'
import Container from './container';
import { CircleAlert } from 'lucide-react';
import { Clock4 } from 'lucide-react';
import { Map } from 'lucide-react';
import { Clipboard } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';
import { CircleX } from 'lucide-react';


const Features = () => {
  return (
    <Container className="py-10 px-4 sm:px-6 md:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Наши преимущества
      </h1>
      <div className="mt-10 overflow-x-auto sm:overflow-visible">
        <div className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 min-w-[600px] sm:min-w-0">
          {/* Карточка 1 */}
          <div className="rounded-lg border-accent border-2 p-6 h-auto min-w-[300px]">
            <CircleAlert color="#2563EB" size={40} />
            <p className="text-xl sm:text-2xl font-bold mt-6 mb-4">Новые автомобили</p>
            <span className="text-[#0F172A] opacity-80 text-base">
              Все наши автомобили — новейшие модели, обеспечивающие комфорт и безопасность на дорогах.
            </span>
          </div>

          {/* Карточка 2 */}
          <div className="rounded-lg border-accent border-2 p-6 h-auto min-w-[300px]">
            <Clock4 color="#2563EB" size={40} />
            <p className="text-xl sm:text-2xl font-bold mt-6 mb-4">Поддержка 24-часа</p>
            <span className="text-[#0F172A] opacity-80 text-base">
              Мы доступны 24/7, чтобы помочь вам в любое время дня и ночи.
            </span>
          </div>

          {/* Карточка 3 */}
          <div className="rounded-lg border-accent border-2 p-6 h-auto min-w-[300px]">
            <Map color="#2563EB" size={40} />
            <p className="text-xl sm:text-2xl font-bold mt-6 mb-4">Удобное расположение</p>
            <span className="text-[#0F172A] opacity-80 text-base">
              Наши точки аренды находятся в удобных локациях по всему городу, включая аэропорты и ж/д станции.
            </span>
          </div>

          {/* Карточка 4 */}
          <div className="rounded-lg border-accent border-2 p-6 h-auto min-w-[300px]">
            <Clipboard color="#2563EB" size={40} />
            <p className="text-xl sm:text-2xl font-bold mt-6 mb-4">Страховка на случай ДТП</p>
            <span className="text-[#0F172A] opacity-80 text-base">
              Каждый автомобиль защищён страховкой от ДТП, покрывающей основные риски.
            </span>
          </div>

          {/* Карточка 5 */}
          <div className="rounded-lg border-accent border-2 p-6 h-auto min-w-[300px]">
            <RefreshCcw color="#2563EB" size={40} />
            <p className="text-xl sm:text-2xl font-bold mt-6 mb-4">Экономьте до 50% на дальних поездках</p>
            <span className="text-[#0F172A] opacity-80 text-base">
              Используйте специальные тарифы и экономьте до 50% на дальних поездках.
            </span>
          </div>

          {/* Карточка 6 */}
          <div className="rounded-lg border-accent border-2 p-6 h-auto min-w-[300px]">
            <CircleX color="#2563EB" size={40} />
            <p className="text-xl sm:text-2xl font-bold mt-6 mb-4">Бесплатная отмена за 48 часов</p>
            <span className="text-[#0F172A] opacity-80 text-base">
              Бесплатная отмена брони за 48 часов до начала аренды.
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Features