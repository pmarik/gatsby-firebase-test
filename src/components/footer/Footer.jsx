import React, { useEffect, useContext, useRef } from 'react';
import { GlobalStateContext, GlobalDispatchContext } from '../../context/GlobalContextProvider';
import './footer.styles.scss';
import FooterForm from './FooterForm';

const Footer = () => {

    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <section className='footer-main'>
                    <h2>Get in touch</h2>
                    <p>Start the conversation to help improve your online presence to get real results for your business. Contact now for a free estimate.</p>

                    <FooterForm />
                </section>

                <aside className='footer-aside'>
                    <h4>Email</h4>
                    <h4>Phone</h4>
                </aside>
            </div>
        </footer>
    )
}
export default Footer;