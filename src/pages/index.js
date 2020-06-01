import React from 'react';

import LayoutPublic from '../components/layout/layout-public';

const LandingPage = () => (
  <main className="main-content-container">
    <section className="hero-home-section">
      <h1>Boost your online presence to the next level</h1>
      <p>
        I specialize in creating and enhancing websites and apps 
        to grow your business
      </p>
    </section>
  </main>
);

export default () => (
  <LayoutPublic>
    <LandingPage />
  </LayoutPublic>
);
