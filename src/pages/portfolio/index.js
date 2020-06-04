import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';

const PortfolioPage = () => (
  <main className="page-container">
    <div className="content-container">
      <section className='portfolio-section'>
        <h1>Portfolio page</h1>
        <p>
          This is the portfolio page
        </p>
      </section>
    </div>
  </main>
);

export default () => (
  <LayoutPublic>
    <PortfolioPage />
  </LayoutPublic>
);
