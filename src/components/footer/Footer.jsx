import React, { useEffect, useContext, useRef } from 'react';
import { GlobalStateContext, GlobalDispatchContext } from '../../context/GlobalContextProvider';
import './footer.styles.scss';
import FooterForm from './FooterForm';
import FooterAside from './FooterAside.component'

const Footer = () => {

    return (
        <footer className="footer">
            <a class="anchor" id="contact"></a>
            <div className="footer-content">
                <section className='footer-main'>
                    <h2>Get in touch</h2>
                    <p>Start the conversation to help improve your online presence to get real results for your business. Contact now for a free estimate.</p>

                    <FooterForm className="sweg"/>
                </section>

                <FooterAside />
            </div>
        </footer>
    )
}
export default Footer;