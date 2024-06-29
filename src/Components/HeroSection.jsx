import React from 'react'
import image from "../images/hero.jpg"
import { Link } from 'react-router-dom';
const HeroSection = (props) => {


    return (
        <>
            <div className='hero_section'>
                <div className='hero_section_content'>

                    <p>WELCOME TO</p>
                    <h2>{props.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit nisi corrupti, voluptas numquam ratione accusamus qui illo nulla expedita, quisquam laboriosam reprehenderit incidunt beatae facere excepturi nihil dolorem. Magnam.</p>
                    <Link to= "/Products"> <button type="submit">SHOP NOW</button></Link>
                </div>
                <div className='hero_section_image'>

                    <img src={image} alt="hero" />



                </div>

            </div>

        </>
    )
}

export default HeroSection