import React from 'react'
import Button from '../Button/Button.component';
import HeroGraphic from '../../../static/img/heroGraphic.inline.svg';

const AboutSection = () => (
        <section className="home-section hero">
                    <div className="content-container hero-content graphic  anim-start-0 fadeIn">
                        <div className="hero-text">
                            <h1>Header Placeholder Text Lorem ipsum dolor sit amet</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor 
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
                                    Scroll Section2
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
                                    Scroll Section3
                            </Button>
                        </div>

                        <HeroGraphic />
                    </div>
                </section>
)

export default AboutSection;