import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import Cart from './pages/Cart'
import AboutUs from './pages/AboutUs'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/SingUp' element={<SingUp />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/AboutUs' element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}
