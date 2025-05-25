import React, { useEffect, useState } from 'react'
import { LogOut } from 'lucide-react';
import { Box } from 'lucide-react';
import Datepick from './ui/datepick/datepick';
import { CircleX } from 'lucide-react';
import MainInput from './custom/main_input';
import { getMe } from '../Api';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [fullName, setFullName] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [inn, setInn] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getMe();
        if (!userData) {
          // Если токен недействителен или нет данных, перенаправляем
          navigate("/");
          return;
        }
        setFullName(userData.full_name || "");
        setBirthDate(userData.birth_date ? new Date(userData.birth_date) : null);
        setCitizenship(userData.citizenship || "");
        setInn(userData.inn || "");
      } catch (error) {
        console.error("Ошибка загрузки данных:", error.message);
        navigate("/"); // Перенаправление при любой ошибке (включая 401)
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div className="text-center py-20">Загрузка...</div>;
  }

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
            <MainInput id="FIO" type="text" placeholder="ФИО" value={fullName} onInput={(e) => setFullName(e.target.value)}/>

            <Datepick placeholder="Дата рождения" className="bg-accent relative w-full rounded-lg border border-[#E2E8F0]
       transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400" onChange={(date) => setBirthDate(date)} selectedDate={birthDate} maxDate={new Date()}/>
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
            <MainInput id="country" type="text" placeholder="Гражданство" value={citizenship} onInput={(e) => setCitizenship(e.target.value)}/>
            <MainInput type="text" placeholder="ИНН" value={inn}
              onInput={(e) => setInn(e.target.value)}/>
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


