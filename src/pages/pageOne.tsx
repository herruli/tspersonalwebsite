import React, {Component,useEffect,useState} from 'react'
import '../pageOne.css';

export interface IPageOnePageProps {}

const PageOnePage: React.FunctionComponent < IPageOnePageProps > = props => {
    return <div
            className = 'homepage_style'> 
            <p> Graduated in Economics and Finance Bachelor, Computer Science Master  </p>
            <p> Worked in <a href='http://www.sfc.hk/en/About-the-SFC/Our-role'>Hong Kong Securities and Futures Commission</a>, <a href="https://www.hkma.gov.hk/eng/about-us/the-hkma/">Hong Kong Monetary Authority</a> as Data Scientist</p>
            <p> Currently I am working in UBS UK as Data Automation Engineer </p>
            <a href='../assets/CV.pdf'>CV</a>
            </div >
}
export default PageOnePage