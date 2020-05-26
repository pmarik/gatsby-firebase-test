import React, { Fragment } from 'react';

import LayoutPublic from '../components/layout-public';

const LandingPage = () => (
  <Fragment>
    <h1>Landing</h1>
    <p>
      Site Landing page public facing
    </p>
  </Fragment>
);

export default () => (
  <LayoutPublic>
    <LandingPage />
  </LayoutPublic>
);
