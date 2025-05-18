import React from 'react'
import Container from './container';


const Contacts = () => {
  return (
    <Container className="flex flex-col gap-10 md:flex-row justify-between py-12 px-4 md:px-28 md:py-24">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Контакты</h1>
        <div className="text-base flex flex-col gap-2">
          <p>ООО “KeyToDrive” Севастопольский проспект 5А</p>
          <p>Телефон:</p>
          <p>Почта</p>
          <p>ВК</p>
        </div>
      </div>
      <div className="w-full md:w-[670px] h-[300px] md:h-[474px]">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A89d37cf99294402451f5a0f4bed1eab489422d55b46f85bcf153a349baf5f4d3&amp;source=constructor"
          width="100%"
          height="100%"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </Container>

  )
}

export default Contacts