import React, { Component } from 'react'
import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom'
import AboutPage from '../pages/About';
import HomePage from '../pages/Home';
import LayoutComponent from './menubar'
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes(){
    const location = useLocation()
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LayoutComponent />}>
            <Route index element={<HomePage />}/>
            <Route path='about' element={<AboutPage/>}/>
        </Route>
    </Routes>
    </AnimatePresence>
    )

}
export default AnimatedRoutes