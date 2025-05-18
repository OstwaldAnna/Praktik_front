import React from 'react'
import { Phone } from 'lucide-react';
import Container from './container';

const Header = () => {
    return (
        <Container className=''>
            <header className="flex flex-row md:flex-row justify-between md:items-center px-4 md:px-12 py-4 gap-4">
                {/* Левая часть: логотип + меню */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                    <a href="/">
                        <img className="h-8" src="/Logo.svg" alt="Логотип" />
                    </a>

                    <nav className=" flex-row hidden md:flex gap-2 md:gap-6 text-sm md:text-base">
                        <a href="/auto">Автопарк</a>
                        <a href="/contacts">Контакты</a>
                    </nav>
                </div>

                {/* Правая часть: телефон и кнопка */}
                <div className="flex flex-row md:flex-row  md:items-center gap-3 md:gap-12">
                    <span className="text-primary flex items-center gap-2 text-sm md:text-base">
                        <Phone size={20} />
                        7 (999) 999 99 99
                    </span>
                    <a href='/auth' className='bg-accent hidden md:flex px-4 py-2 rounded-md'>Войти</a>
                </div>
            </header>
        </Container>
    )
}

export default Header
