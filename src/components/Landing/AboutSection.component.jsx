import React from 'react'
import Button from '../Button/Button.component';


const AboutSection = () => {
    return (
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
    )
}

export default AboutSection;