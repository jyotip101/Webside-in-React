import React from 'react'

import Button from './Button'

import './HomeSection.css'

function HomeSection(){
    return (
        <div className="home-container">
            <video src={require("../images/video.mp4").default} autoPlay loop muted />
            <div className="banner-fadeTop"></div>
            <h1>Adventure Web <i className="fas fa-suitcase-rolling"/></h1>
            <p>What are you waiting for?</p> 
            <div className="home-btns"> 
                <Button 
                    className='btn btnHome'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large '
                >
                    Get Started
                </Button>
                <Button 
                    className='btn btnHome btnHomeW'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large '
                >
                    Watch Tralier 
                </Button> 
            </div> 
        </div>
    )
}

export default HomeSection