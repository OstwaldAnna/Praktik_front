import './App.css'
import Container from './components/container'
import Features from './components/features'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import New_auto from './components/new_auto'
import Profile from './components/profile'
import Car_park from './components/car_park';
import Call_actions from './components/call_actions'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Contacts_page from './pages/contacts_page'
import CarPage from './pages/car_page'
import ProfilePage from './pages/profile_page'
import NotFound from './pages/not_found'
import ProductCarPage from './pages/product_car_page'
import AuthPage from './pages/auth_page'
import RegistrPage from './pages/registr_page'

function App() {

  return (
    <>
      {/* <Container>
        <Header />
        <Hero/>
      </Container>
      <New_auto/>
      <Features/>
      <Car_park/>
      <Call_actions/> 
      <Profile/>
      <Footer />*/}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts_page />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/auto' element={<CarPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/productcar' element={<ProductCarPage />} />
        <Route path='/productcar/:id' element={<ProductCarPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/registr' element={<RegistrPage />} />
      </Routes>
    </>
  )
}

export default App
