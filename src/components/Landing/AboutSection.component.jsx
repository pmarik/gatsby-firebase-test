import React from 'react'
import Button from '../Button/Button.component';
import { motion } from 'framer-motion';
import HeroGraphic from '../../assets/images/heroGraphic.inline.svg';


const containerVariants = {
    initial: {
        opacity: 0,
        y: 25,
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween', 
            delay: 0.3,
            duration: 0.8,
        }
    }
}


const AboutSection = () => {
    return (
        <section className="home-section hero">
                    <motion.div 
                      variants={containerVariants}
                      initial="initial"
                      animate="end"
                      className="content-container hero-content graphic">

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

                    </motion.div>

                </section>
    )
}

export default AboutSection;