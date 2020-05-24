import React from 'react';

import LayoutPublic from '../components/layout-public';

const AboutPage = () => (
  <>
    <h1>About page</h1>
    <p>
      This is the about page
    </p>
  </>
);

export default () => (
  <LayoutPublic>
    <AboutPage />
  </LayoutPublic>
);
