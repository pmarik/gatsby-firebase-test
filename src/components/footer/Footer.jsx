import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <section className='footer-main'>
                <h2>Get in touch</h2>
                <p>Start the conversation to help improve your online presence to get real results for your business. Contact now for a free estimate.</p>

                <form>
                    <div className="input-wrap">
                        <label>
                            Name
                            <input />
                        </label>

                        <label>
                            Email
                            <input />
                        </label>
                    </div>

                    <label className='textarea-wrap'>
                        Message
                        <textarea />
                    </label>
                </form>
            </section>

            <aside className='footer-aside'>
                <h4>Email</h4>
                <h4>Phone</h4>
            </aside>
           
        </footer>
    )
}
export default Footer;