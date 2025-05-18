import React from 'react'
import Container from '../components/container'
import Features from '../components/features'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import New_auto from '../components/new_auto'
import Profile from '../components/profile'
import Car_park from '../components/car_park';
import Call_actions from '../components/call_actions'
import NavMobile from '@/components/nav_mobile'

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <New_auto/>
            <Features/>
            <Car_park/>
            <Call_actions/>
            <Footer/>
            <NavMobile/>
        </div>
    )
}

export default Home
