import React from 'react'
import PhoneGraphic from '../../assets/images/phoneProcess.inline.svg';
import Button from '../Button/Button.component';
import { InView } from 'react-intersection-observer';

const ProcessSection = () => {
    return (
        <section  id="process" className=" process">
				<div className="content-container">
                    <div className="process-text">
                        <div className="process-header">
                            <h2 className="process-bubble">Design</h2> 
                            <InView triggerOnce rootMargin={'15%'}>
                                {({ inView, ref, entry }) => (
                                    <span ref={ref} className={`arrow ${inView && ('arrowAnim')}`}></span>
                                )}
                            </InView>

                            <h2 className="process-bubble">Develop</h2> 
                            <InView triggerOnce rootMargin={'15%'}>
                                {({ inView, ref, entry }) => (
                                    <span ref={ref} className={`arrow ${inView && ('arrowAnim')}`}></span>
                                )}
                            </InView>
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