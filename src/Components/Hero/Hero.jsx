import React from "react";
import './Hero.css'
import arrow_icon from'../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'

const Hero = () => {

    return(<div className='hero'>
    <div className="hero_left">
        <h2>NEW Arrivals</h2>
        <div>
            <p>New</p>
            <p>Collections</p>
            <p>for Everyone</p>
        </div>
        <div className="hero_latest_btn">
            <div><Link style={{textDecoration: 'none'}} to= '/mens'>Latest Collection</Link></div>
            <img src={arrow_icon} alt="Arrow Icon" />
        </div>
    </div>

    <div className="hero_right">
        <img src={hero_image} alt="Hero" />
    </div>

</div>
    )
}

export default Hero