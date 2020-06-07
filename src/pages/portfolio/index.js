import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import PortfolioGrid from '../../components/Portfolio/PortfolioGrid.component';

const PortfolioPage = () => (
  <main className="page-container">
    <div className="content-container">
      <section className='portfolio-section'>
        <h1>Portfolio</h1>
        <PortfolioGrid />
      </section>
    </div>
  </main>
);

export default () => (
  <LayoutPublic>
    <PortfolioPage />
  </LayoutPublic>
);
