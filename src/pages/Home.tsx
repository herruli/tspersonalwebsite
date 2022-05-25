import { Component,useState } from 'react'
import { convertToObject } from 'typescript'
import  { BasicTable } from '../components/Table'
import PageOne from './pageOne'
import { motion } from 'framer-motion'
import ReactFullpage from '@fullpage/react-fullpage';
import videoBg from '../assets/videoBg.mp4'
import '../Home.css';


export interface IHomePageProps {}


const HomePage: React.FunctionComponent<IHomePageProps> = props => {
    const [showTable, setShowTable] = useState(false)
    
    return (<ReactFullpage.Wrapper>
            <div className='background_video'>
                <video src= {videoBg} autoPlay loop muted/>
                <div className='welcome_style'>
                    <h1>Can machine assists human?</h1>
                </div>
            </div>
            <motion.div
            className='cardStyle'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
                 <motion.p className = 'homepage_style'> 
                    Hi, I am Herru. A data scientist who applies machine learning into financial world</motion.p>
                 {/*
                 <motion.button 
                    className='buttonStyle'
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    onClick={()=> setShowTable(!showTable)}>Press Me
                 </motion.button>
                 
                {
                    showTable?<BasicTable />:null
                }
                */}
            </motion.div>
            <PageOne />
            </ReactFullpage.Wrapper>)
            
}
export default HomePage