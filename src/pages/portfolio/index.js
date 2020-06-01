import React from 'react';

import LayoutPublic from '../../components/layout/layout-public';

const PortfolioPage = () => (
  <main className="main-content-container">
    <h1>Portfolio page</h1>
    <p>
      This is the portfolio page
    </p>
  </main>
);

export default () => (
  <LayoutPublic>
    <PortfolioPage />
  </LayoutPublic>
);
