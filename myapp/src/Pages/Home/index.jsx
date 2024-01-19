import React from 'react'
import { Helmet } from 'react-helmet-async';
import "./style.scss"
import Slider from '../../Component/Slider';
import AboutTasty from '../../Component/AboutTasty';
import OurMenu from '../../Component/OurMenu';
import GuestSay from '../../Component/GuestSays';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            
            <Slider></Slider>
            <AboutTasty></AboutTasty>
            <OurMenu></OurMenu>
            <GuestSay></GuestSay>
        </div>
    )
}

export default Home