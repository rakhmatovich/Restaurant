import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import Cart from './pages/Cart'
import AboutUs from './pages/AboutUs'
import Keytering from './pages/Keytering'
import Values from './pages/Values'
import ConfirmOrder from './pages/ConfirmOrder'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Caakcy from './pages/Caakcy'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/SingUp' element={<SingUp />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/keytering' element={<Keytering />} />
                <Route path='/values' element={<Values />} />
                <Route path='/confirmorder' element={<ConfirmOrder />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/Location' element={<Location />} />
                <Route path='/Caakcy' element={<Caakcy />} />

            </Routes>
        </BrowserRouter>
    )
}
