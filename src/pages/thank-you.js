import React from 'react';
import LayoutPublic from '../components/layout/layout-public';
import SEO from '../components/SEO.component';
import { Link } from 'gatsby'


const ThanksPage = () => {

    return(
        <main className="page-container">
            <div className="content-container anim-start-0 fadeIn" style={{minHeight: '60vh'}}>
                <section style={{paddingTop: 'calc(3.25rem + 45px)', textAlign: 'center'}}>
                    <h1 style={{marginBottom: '25px'}}>Thank you!</h1>
                    <p>Your form submission has been received. Please look for a reply message in your inbox soon. In the meantime, return back to the <Link to="/" className="highlight">home page</Link> or <Link to="/portfolio" className="highlight">view my subpage.</Link></p>
                </section>
            </div>
        </main>
)};

export default () => (
  <LayoutPublic>
    <SEO />
    <ThanksPage />
  </LayoutPublic>
);
