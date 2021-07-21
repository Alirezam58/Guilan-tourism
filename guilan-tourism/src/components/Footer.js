import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-header'>
                    برای دریافت خبرنامه رایگان عضو شوید
                </p>
                <p className='footer-subscription-text'>
                    در هر زمان می توانید عضویت خود را لغو نمایید
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" className='footer-input' name="email" placeholder="پست الکترونیک"></input>
                        <Button buttonStyle='btn--outline'>عضو شوید</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>درباره ما</h2>
                        <Link to='/'>راهنمای سایت</Link>
                        <Link to='/'>نظرات کاربران</Link>
                        <Link to='/'>نقشه راهبری</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>تماس با ما</h2>
                        <Link to='/'>راه های ارتباطی</Link>
                        <Link to='/'>ارتباط با کارشناش</Link>
                        <Link to='/'>شعب ما در گیلان</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>درباره ما</h2>
                        <Link to='/'>راهنمای سایت</Link>
                        <Link to='/'>نظرات کاربران</Link>
                        <Link to='/'>نقشه راهبری</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>تماس با ما</h2>
                        <Link to='/'>راه های ارتباطی</Link>
                        <Link to='/'>ارتباط با کارشناش</Link>
                        <Link to='/'>شعب ما در گیلان</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            گیلان توریسم <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to="/"
                        target="_blank"
                        aria-label="Facebook">
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to="/"
                        target="_blank"
                        aria-label="Instagram">
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                        to="/"
                        target="_blank"
                        aria-label="Linkedin">
                            <i className='fab fa-linkedin'></i>
                        </Link>
                        <Link className='social-icon-link twitter'
                        to="/"
                        target="_blank"
                        aria-label="Twitter">
                            <i className='fab fa-twitter'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
