import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import ProductCar from '@/components/product_car'
import NavMobile from '@/components/nav_mobile'

const ProductCarPage = () => {
    return (
        <>
            <Header />
            <ProductCar />
            <Footer />
            <NavMobile/>
        </>
    )
}

export default ProductCarPage
