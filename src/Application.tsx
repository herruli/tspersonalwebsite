import React from 'react';
import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom'

import { motion } from 'framer-motion'
import AnimatedRoutes from './components/AnimatedRoute';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (<BrowserRouter>
    <AnimatedRoutes/>
    </BrowserRouter>
    )
}

export default Application