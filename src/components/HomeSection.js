import React from 'react'

import Button from './Button'

import './HomeSection.css'

function HomeSection(){
    return (
        <div className="home-container">
            {/* <img src={require("../images/homeImg.jpg").default} alt=""/> */}
            <h1>Sweet Home</h1>
            <p>As humans turn into savage monsters and wreak terror,
             one troubled teen and his apartment neighbors fight to
             survive — and to hold on to their humanity.</p>

            <div className="home-btns">
                <Button 
                    className='btn'
                    buttonSize='btn--outline'
                    buttonSize='btn--large'
                >
                    Watch Tralier <i className=" far fa-play-circle"></i>
                </Button>
                <Button 
                    className='btn'
                    buttonSize='btn--primary'
                    buttonSize='btn--large'
                >
                    Watch on Offical Side
                </Button>
            </div>
        </div>
    )
}

export default HomeSection