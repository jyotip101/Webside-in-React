import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

import './footer.css'

function Footer() {
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join and get the infomation about top 10 Movies delay
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-area">
                    <form action="">
                        <input 
                            type="email" name="email"
                            placeholder="Your Email..." 
                            className="footer-input"
                        />
                        <Button buttonStyle=' btn btn-outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">

                 <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Short Liinks</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Episodes</Link>
                        <Link to='/'>Cast</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Terms of Service</Link>
                        <Link to='/'>Careers</Link>
                    </div>
                </div>
            
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Careers</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Careers</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                        <img src={require('../images/logo.png').default} alt="" className="logo"  />
                        </Link>
                    </div>
                     
                    <div className="social-icon">
                        <Link className="social-icon-link facebook"
                            to='/' target='_blank' aria-label='facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                            to='/' target='_blank' aria-label='twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to='/' target='_blank' aria-label='instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                            to='/' target='_blank' aria-label='linkedin'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Sweet Home @Copyright 2021</small>
                </div>
            </section>
        </div>
    )
}

export default Footer