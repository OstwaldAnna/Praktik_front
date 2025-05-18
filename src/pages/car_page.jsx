import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import CarList from '../components/car_list'
import NavMobile from '@/components/nav_mobile'

const CarPage = () => {
  return (
    <>
      <Header />
      <CarList/>
      <Footer />
      <NavMobile/>
    </>
  )
}

export default CarPage