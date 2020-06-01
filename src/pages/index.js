import React from 'react';

import LayoutPublic from '../components/layout/layout-public';

const LandingPage = () => (
  <>
    <h1>Home</h1>
    <p>
      Site Landing page public facing
    </p>
  </>
);

export default () => (
  <LayoutPublic>
    <LandingPage />
  </LayoutPublic>
);
