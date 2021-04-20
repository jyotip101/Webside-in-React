import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

import './footer.css'

function Footer() {
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join and get the infomation about Adventure web delay
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
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
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                        <Link to='/'>Ambassadors</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Terms of Service</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                    </div>
                </div>
            
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Sponsorsships</Link>
                        <Link to='/'>Destination</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                        <h1>Web <i className="fas fa-suitcase-rolling"/></h1>
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