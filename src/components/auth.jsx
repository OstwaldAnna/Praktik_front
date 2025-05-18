import React from 'react'
import Container from './container'
import MainInput from './custom/main_input'



const Auth = () => {
  return (
    <div className="flex justify-center items-center bg-accent px-4 py-10">
      <Container className="py-8 px-6 items-center text-center max-w-md w-full bg-white rounded-lg flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          Авторизация
        </h1>

        <div className="flex flex-col gap-4 w-full">
          <MainInput type="email" placeholder="Email" />
          <MainInput type="password" placeholder="Пароль" />

          <button className="rounded-lg bg-primary hover:bg-primary/80 px-6 py-2 text-white text-center w-full cursor-pointer transition-colors duration-200">
            Войти
          </button>

          <div className="text-center text-sm sm:text-base text-[#0F172A] opacity-80">
            Нет аккаунта?{" "}
            <a href="/registr" className="font-bold text-primary">
              Зарегистрироваться
            </a>
          </div>
        </div>
      </Container>
    </div>


  )
}

export default Auth
