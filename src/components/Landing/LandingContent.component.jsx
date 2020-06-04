import React from 'react'
import './landingContent.styles.scss';
import Button from '../Button/Button.component';

const LandingContent = () => {
    return (  
        <main className="page-container">
                <section className="home-section hero">
                    <div className="content-container">
                        <h1>Boost your online presence to the next level</h1>
                        <p>
                            I specialize in creating and enhancing websites and apps 
                            to grow your business
                        </p>

                        <Button 
                            btnTarget="#projects" 
                            textColor="#ffffff"
                            outlineColor="#2193B0" 
                            fillColor="#2193B0"
                            hoverTextColor="#2193B0"
                            hoverFillColor="#ffffff"
                            direction='left'
                                >
                                SEE MY WORK
                        </Button>

                        <Button 
                            btnTarget="#services" 
                            textColor="#2193B0"
                            outlineColor="#2193B0" 
                            fillColor="#ffffff"
                            hoverTextColor="#ffffff"
                            hoverFillColor="#2193B0"
                                >
                                SERVICES
                        </Button>
                    </div>
                </section>

                <section id="projects" className="home-section featured-projects">
                    <div className="content-container">
                        <h2>Featured Projects</h2>
                        <div className="project-feature-list-wrap">
                            <div className="project-feature">

                            </div>
                        </div>
                    </div>
                </section>

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