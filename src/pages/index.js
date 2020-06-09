import React from 'react';
import LayoutPublic from '../components/layout/layout-public';
import LandingContent from '../components/Landing/LandingContent.component';
import SEO from '../components/SEO.component';

const LandingPage = () => (
  <LandingContent />
);

export default () => (
  <LayoutPublic>
    <SEO />
    <LandingPage />
  </LayoutPublic>
);
