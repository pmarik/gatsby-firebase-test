import React from 'react';
import { Link } from 'gatsby';
import MailIcon from '../../assets/images/mail.inline.svg'
import LocationIcon from '../../assets/images/location.inline.svg'
import PhoneIcon from '../../assets/images/phone.inline.svg'
import LinkedinIcon from '../../assets/images/linkedin.inline.svg';
import GithubIcon from '../../assets/images/github.inline.svg';

const FooterAside = () => {
    return (
        <aside className='footer-aside'>
            <div className="contact-info-wrap">
                <div className="aside-icon-wrap">
                    <LocationIcon/>
                    <div className="info-wrap">
                        <h4>Location</h4>
                        <p>Salt Lake City, Utah</p>
                    </div>
                </div>
                <div className="aside-icon-wrap">
                    <MailIcon />
                    <div className='info-wrap'>
                        <h4>Email</h4>
                        <a href="mailto:paul@marik.tech">paul@marik.tech</a>
                    </div>
                </div>
                <div className="aside-icon-wrap">
                    <PhoneIcon />
                    <div className="info-wrap">
                        <h4>Phone</h4>
                        <a href="tel:9515245866">951 524-5866</a>
                    </div>
                </div>
            </div>

            <div className="social-icons">
                <LinkedinIcon />
                <GithubIcon />
            </div>

            <div className="legal-info">
                <Link to="/terms-of-service">Terms of Service</Link> | <Link to="privacy-policy">Privacy Policy</Link>
                <p> © Marik Tech, LLC</p>
            </div>
           
        </aside>
    )
}

export default FooterAside;