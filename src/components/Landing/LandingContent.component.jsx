import React from 'react'
import './landingContent.styles.scss';
import AboutSection from './AboutSection.component';
import ProjectsSection from './ProjectsSection.component';

const LandingContent = () => {
    return (  
        <main className="page-container">

            <AboutSection />
            <ProjectsSection />
               
                <section  id="services" className="home-section services">
                    <div className="content-container">
                        <h2>Services</h2>
                        <div className="services-container">
                        </div>
                    </div>
                </section>
        </main>
  )
}

export default LandingContent;