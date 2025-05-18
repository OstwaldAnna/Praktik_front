import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between py-7 px-6 md:px-32 bg-accent text-accent-text text-center md:text-left">
            <span>© 2023-2024 ООО “KeyToDrive”</span>
            <span>Мы предлагаем аренду автомобилей, идеально подходящих на любой вкус</span>
            <div className="flex gap-4 md:gap-6">
                <a href="/auto">Автопарк</a>
                <a href="/contacts">Контакты</a>
            </div>
        </div>
    )
}

export default Footer