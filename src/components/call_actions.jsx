import React from 'react'
import Container from './container';
import { useState } from 'react';
import Modal from './modal';

const Call_actions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='py-20 px-4 sm:px-12'>
      <Container className='bg-accent text-center py-10 px-6 sm:py-16 sm:px-28 rounded-lg'>
        <h1 className='text-3xl sm:text-5xl font-bold'>Не нашли ответы на свои вопросы?</h1>
        <p className='text-[#0F172A] opacity-80 font-normal text-base mt-4 sm:mt-6'>
          Наши специалисты готовы ответить на все ваши вопросы по аренде авто 🚗💬!
          Свяжитесь с нами через форму ниже или позвоните, чтобы получить консультацию и выбрать идеальный автомобиль. Мы здесь, чтобы помочь!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className='mt-6 w-full sm:w-auto rounded-lg bg-primary px-12 py-2 text-white'
        >
          Задайте вопрос
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Обратная связь</h2>
          <div className='flex flex-col gap-4'>
            <input
              type="text"
              placeholder="Почта"
              id="experience"
              className='w-full bg-transparent placeholder:text-accent-text border border-[#E2E8F0] rounded-lg
          py-2.5 px-4 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-400'
            />
            <textarea
              placeholder="Напишите нам свой вопрос"
              id="question"
              className='w-full h-24 bg-transparent placeholder:text-accent-text border border-[#E2E8F0] rounded-lg
          py-2.5 px-4 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-400 resize-none'
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full sm:w-auto rounded-lg bg-primary px-12 py-2 text-white">
              Отправить
            </button>
          </div>
        </Modal>
      </Container>
    </div>

  )
}

export default Call_actions