import React from 'react';

import LayoutPublic from '../../components/layout/layout-public';

const PortfolioPage = () => (
  <main className="page-container">
    <div className="main-content-container">
      <h1>Portfolio page</h1>
      <p>
        This is the portfolio page
      </p>
    </div>
  </main>
);

export default () => (
  <LayoutPublic>
    <PortfolioPage />
  </LayoutPublic>
);
