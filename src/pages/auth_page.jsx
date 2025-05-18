import React from 'react'
import NavMobile from '@/components/nav_mobile'
import Footer from '../components/footer'
import Header from '../components/header'
import Auth from '@/components/auth'

const AuthPage = () => {
    return (
        <div>
            <>
                <Header />
                <Auth/>
                <Footer />
                <NavMobile />
            </>
        </div>
    )
}

export default AuthPage
