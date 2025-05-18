import React from 'react'
import { LogOut } from 'lucide-react';
import { Box } from 'lucide-react';
import Datepick from './ui/datepick/datepick';
import { CircleX } from 'lucide-react';
import MainInput from './custom/main_input';


const Profile = () => {
  return (

    <div className='bg-accent'>
      <div className="flex flex-col lg:flex-row py-10 px-4 lg:px-[7.5rem] gap-6 items-start justify-center">

        {/* Левая панель меню */}
        <div className="bg-white w-full lg:w-60 rounded-lg flex flex-col gap-6 p-4">
          <div className="flex text-primary gap-2 items-center">
            <Box />
            <span>Мой профиль</span>
          </div>
          <div className="flex gap-2 items-center">
            <LogOut />
            <span>Выйти</span>
          </div>
        </div>

        {/* Основной контент */}
        <div className="bg-white rounded-lg flex flex-col gap-10 p-4 lg:p-6 w-full">
          {/* Личная информация */}
          <div className="flex flex-col gap-4">
            <p className='font-medium text-sm lg:text-base'>ЛИЧНАЯ ИНФОРМАЦИЯ</p>
            <MainInput id="FIO" type="text" placeholder="ФИО" />
            <Datepick />
            <button className='px-6 py-2 rounded-lg bg-primary text-white w-full lg:w-fit'>
              Сохранить изменения
            </button>
          </div>

          {/* Доп. информация */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full">
              <p className='font-medium text-sm lg:text-base'>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</p>
              <CircleX className='text-red-500 cursor-pointer ' />
            </div>
            <MainInput id="country" type="text" placeholder="Гражданство" />
            <MainInput type="text" placeholder="ИНН" />
            <button className='px-6 py-2 rounded-lg bg-primary text-white w-full lg:w-fit'>
              Отправить данные
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile


