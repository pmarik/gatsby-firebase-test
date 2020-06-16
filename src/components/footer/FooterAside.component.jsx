import React from 'react';
import { Link } from 'gatsby';
import MailIcon from '../../../static/img/mail.inline.svg'
import LocationIcon from '../../../static/img/location.inline.svg'
import PhoneIcon from '../../../static/img/phone.inline.svg'
import LinkedinIcon from '../../../static/img/linkedin.inline.svg';
import GithubIcon from '../../../static/img/github.inline.svg';
import CodepenIcon from '../../../static/img/codepen.inline.svg';

const FooterAside = () => {
    return (
        <aside className='footer-aside'>
            <div className="contact-info-wrap">
                <div className="aside-icon-wrap">
                    <LocationIcon style={{fill: '#354762'}}/>
                    <div className="info-wrap">
                        <h4>Location</h4>
                        <p>Lorem ipsum dolor solor</p>
                    </div>
                </div>
                <div className="aside-icon-wrap">
                    <MailIcon style={{fill: '#354762'}}/>
                    <div className='info-wrap'>
                        <h4>Email</h4>
                        <a href="mailto:paul@marik.tech">random@email</a>
                    </div>
                </div>
                <div className="aside-icon-wrap">
                    <PhoneIcon style={{fill: '#354762'}}/>
                    <div className="info-wrap">
                        <h4>Phone</h4>
                        <a href="tel:9515245866">123 123-1234</a>
                    </div>
                </div>
            </div>

            <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" >
                    <LinkedinIcon />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer noopener" >
                    <GithubIcon />
                </a>
                <a href="https://codepen.io/" target="_blank" rel="noreferrer noopener" >
                    <CodepenIcon />
                </a>
            </div>

            <div className="legal-info">
                <p><Link to="/terms-of-service">Terms of Service</Link> |  <Link to="/privacy-policy">Privacy Policy</Link></p>
                <p> © 2020 Test Project, LLC</p>
            </div>
           
        </aside>
    )
}

export default FooterAside;