import React, {Component,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'



export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent < IAboutPageProps > = props => {
    return <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}> 
            <p> this is About Page </p>
            </motion.div >
}
export default AboutPage