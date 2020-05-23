import React, { Fragment } from 'react';

import Layout from '../components/layout';

const LandingPage = () => (
  <Fragment>
    <h1>Landing</h1>
    <p>
      Site Landing page public facing
    </p>
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
