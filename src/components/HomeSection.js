import React from 'react'

import Button from './Button'

import './HomeSection.css'

function HomeSection(){
    return (
        <div className="home-container">
            {/* <video src={require("../images/video.mp4").default} autoPlay loop muted /> */}
            <div className="banner-fadeTop"></div>
            <p>What are you waiting for?</p> 
            <div className="home-btns"> 
                <Button 
                    className='btn'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large '
                >
                    Watch Tralier 
                </Button> 
            </div>
            <div className="banner-fadeBottom"></div>
        </div>
    )
}

export default HomeSection