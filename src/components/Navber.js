import React, { useState } from 'react'
import {Link} from 'react-router-dom'


function Navbar(){

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return(
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    TRVL <i className="fab fa-typo3" />
                </Link>
                
                <div onClick={handleClick} className="menu-icon">
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link 
                            to='./' 
                            onClick={closeMobileMenu} 
                            className="nav-links"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to='./projects' 
                            onClick={closeMobileMenu} 
                            className="nav-links"
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to='./contact' 
                            onClick={closeMobileMenu} 
                            className="nav-links"
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to='./about' 
                            onClick={closeMobileMenu} 
                            className="nav-links"
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to='./profile' 
                            onClick={closeMobileMenu} 
                            className="nav-links"
                        >
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar