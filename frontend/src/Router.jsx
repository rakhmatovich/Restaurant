import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Keytering from './pages/Keytering'
import Values from './pages/Values'
import ConfirmOrder from './pages/ConfirmOrder'
import Menu from './pages/Menu'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/keytering' element={<Keytering />} />
                <Route path='/values' element={<Values />} />
                <Route path='/confirmorder' element={<ConfirmOrder />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
        </BrowserRouter>
    )
}
