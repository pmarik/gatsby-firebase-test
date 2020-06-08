import React from 'react'
import Button from '../Button/Button.component';
import { motion } from 'framer-motion';

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
            delay: 0.1,
            duration: 0.5,
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
                      className="content-container">

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
                    </motion.div>
                </section>
    )
}

export default AboutSection;