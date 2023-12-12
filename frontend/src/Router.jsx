import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Keytering from './pages/Keytering'
import Values from './pages/Values'
import ConfirmOrder from './pages/ConfirmOrder'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/keytering' element={<Keytering />} />
                <Route path='/values' element={<Values />} />
                <Route path='/confirmorder' element={<ConfirmOrder />} />
            </Routes>
        </BrowserRouter>
    )
}
