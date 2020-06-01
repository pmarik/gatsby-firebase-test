import React from 'react';

import LayoutPublic from '../components/layout/layout-public';

const ContactPage = () => (
  <main className="main-content-container">
    <h1>Contact</h1>
    <p>
      This is the contact page
    </p>
  </main>
);

export default () => (
  <LayoutPublic>
    <ContactPage />
  </LayoutPublic>
);
