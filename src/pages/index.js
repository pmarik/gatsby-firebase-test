import React from 'react';
import LayoutPublic from '../components/layout/layout-public';
import LandingContent from '../components/Landing/LandingContent.component';

const LandingPage = () => (
  <LandingContent />
);

export default () => (
  <LayoutPublic>
    <LandingPage />
  </LayoutPublic>
);
