import React from 'react'
import { Home, Car, User, Settings, Navigation } from "lucide-react";


const NavMobile = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around py-2 lg:hidden z-50">
            <a href="/" className="flex flex-col items-center text-sm text-gray-700 hover:text-primary">
                <Home className="w-6 h-6" />
                <span>Главная</span>
            </a>
            <a href="/auto" className="flex flex-col items-center text-sm text-gray-700 hover:text-primary">
                <Car className="w-6 h-6" />
                <span>Автопарк</span>
            </a>
            <a href="/contacts" className="flex flex-col items-center text-sm text-gray-700 hover:text-primary">
                <Navigation />
                <span>Контакты</span>
            </a>
            <a href="/profile" className="flex flex-col items-center text-sm text-gray-700 hover:text-primary">
                <User className="w-6 h-6" />
                <span>Профиль</span>
            </a>
        </div>
    )
}

export default NavMobile
