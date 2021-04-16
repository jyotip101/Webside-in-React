import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Button from './Button'

import './Navbar.css'

function Navbar(){

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true) 
        }
    }

    useEffect(() => {
        showButton()
    }, [])

     window.addEventListener('resize', showButton) 
 
    return(
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link 
                    to='/' 
                    className="navbar-logo" 
                    onClick={closeMobileMenu}
                >
                    <img src={require('../images/logo.png').default} alt="" className="logo"  />
                </Link>
                
                <div 
                    onClick={handleClick} 
                    className="menu-icon"
                >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click || window.innerWidth >= 960 ? 'nav-menu' : 'displayNone'}>
                    <li className='nav-item'>
                        <Link 
                            to='./' 
                            onClick={closeMobileMenu} 
                            className='nav-links'
                        >
                            Home
                        </Link>
                    </li> 
                    <li className='nav-item'>
                        <Link 
                            to='./episodes' 
                            onClick={closeMobileMenu} 
                            className='nav-links'
                        >
                            Episodes
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='./cast' 
                            onClick={closeMobileMenu} 
                            className='nav-links'
                        >
                            Cast
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='./watch-trailer' 
                            onClick={closeMobileMenu} 
                            className='nav-links-mobile' 
                        >
                            Watch Trailer <i className=" far fa-play-circle"></i>
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline '> Watch on Offical Side <i className=" far fa-play-circle"></i> </Button>}
            </div>
        </nav>
    </>
    )
}

export default Navbar