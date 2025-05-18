import React from 'react'
import Container from './container'
import MainInput from './custom/main_input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'


const Registr = () => {
    return (
        <div className="flex justify-center items-center  bg-accent px-4 py-10">
            <Container className="py-8 px-6 items-center text-center max-w-md w-full bg-white rounded-lg flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
                    Регистрация
                </h1>

                <div className="flex flex-col gap-4 w-full">
                    <MainInput placeholder="ФИО" />
                    <MainInput type="email" placeholder="Почта" />
                    <MainInput type="password" placeholder="Пароль" />
                    <MainInput type="password" placeholder="Повторите пароль" />

                    <button className="rounded-lg bg-primary hover:bg-primary/80 px-6 py-2 text-white text-center w-full cursor-pointer transition-colors duration-200">
                        Зарегистрироваться
                    </button>

                    <Label className="flex items-center justify-center text-[#0F172A] text-center opacity-80 text-sm sm:text-base gap-2">
                        <Checkbox /> Вы соглашаетесь со всеми правами
                    </Label>
                </div>
            </Container>
        </div>
    )
}

export default Registr
