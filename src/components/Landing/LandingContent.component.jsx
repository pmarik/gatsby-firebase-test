import React from 'react'
import './landingContent.styles.scss';
import AboutSection from './AboutSection.component';
import ProjectsSection from './ProjectsSection.component';
import ServicesSection from './ServicesSection.component';
import ProcessSection from './ProcessSection.component';
import PricingSection from './PricingSection.component';

const LandingContent = () => {
    return (  
        <main className="page-container">

            <AboutSection />
            <ProjectsSection />
            <ServicesSection />
            <ProcessSection />
            <PricingSection />
               
        </main>
  )
}

export default LandingContent;