import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import PortfolioGrid from '../../components/Portfolio/PortfolioGrid.component';
import SEO from '../../components/SEO.component';

const PortfolioPage = () => (
  <main className="page-container">
    <SEO title="Marik Tech | Portfolio" />
    <div className="content-container anim-start-0 fadeIn">
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
