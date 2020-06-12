import React from 'react'
import PhoneGraphic from '../../assets/images/phoneProcess.inline.svg';
import Button from '../Button/Button.component';
import VisibilitySensor from '../animations/VisibilitySensor.component';
import { motion } from 'framer-motion';
import { arrowVariant1, arrowVariant2 } from '../animations/animate.utils';


const ProcessSection = () => {
    return (
        <section  id="process" className=" process">
				<div className="content-container">
                    <div className="process-text">
                        <div className="process-header">
                            <h2 className="process-bubble">Design</h2> 
                            <VisibilitySensor
								once
								partialVisibility
							>
                                {({ isVisible }) => (
                                // <span className={`arrow ${isVisible && ('arrowAnim')}`}></span>
                                <motion.span 
                                    variants={arrowVariant1}
                                    initial="initial"
                                    animate={isVisible ? 'end' : 'initial'}
                                    className='arrow'>
                                    </motion.span>

                                )}
                            </VisibilitySensor>
                            <h2 className="process-bubble">Develop</h2> 
                            <VisibilitySensor
								once
								partialVisibility
							>
                                {({ isVisible }) => (
                                 <motion.span 
                                 variants={arrowVariant2}
                                 initial="initial"
                                 animate={isVisible ? 'end' : 'initial'}
                                 className='arrow'>
                                 </motion.span>
                                )}
                            </VisibilitySensor>
                            <h2 className="process-bubble">Deploy</h2>
                        </div>
                        <p>Get a guided process from idea to reality. Full design ideation, custom development, and tailored deployment for your online needs. I create pixel perfect designs and engaging experiences to help tell your story in an impactful way. Solidify your brand and sell your services and products online now. </p>
                        <Button 
                            btnTarget="#contact" 
                            textColor="#2193B0"
                            outlineColor="#2193B0" 
                            fillColor="#ffffff"
                            hoverTextColor="#ffffff"
                            hoverFillColor="#2193B0"
                                >
                                CONTACT NOW
                        </Button>
                    </div>
                    <div className="process-image">
                        <PhoneGraphic />
                    </div>
                </div>
        </section>
    )
}

export default ProcessSection; 