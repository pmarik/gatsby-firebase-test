import React from 'react';
import './footer.styles.scss';
import FooterForm from './FooterForm';
import FooterAside from './FooterAside.component'

const Footer = () => (
    <footer className="footer" id="contact">
        <div className="footer-content">
            <section className='footer-main'>
                <h2>Footer Component</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
                <FooterForm/>
            </section>
            <FooterAside />
        </div>
    </footer>
)

export default Footer;