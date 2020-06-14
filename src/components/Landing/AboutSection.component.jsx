import React from 'react'
import Button from '../Button/Button.component';
import HeroGraphic from '../../../static/img/heroGraphic.inline.svg';

const AboutSection = () => (
        <section className="home-section hero">
                    <div className="content-container hero-content graphic  anim-start-0 fadeIn">
                        <div className="hero-text">
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
                                options={{
                                    offset: -30,
                                    duration: 600,
                                }}
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
                                options={{
                                    offset: -30,
                                    duration: 900
                                }}
                                    >
                                    SERVICES
                            </Button>
                        </div>

                        <HeroGraphic />
                    </div>
                </section>
)

export default AboutSection;