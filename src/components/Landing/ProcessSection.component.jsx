import React from 'react'
import PhoneGraphic from '../../../static/img/phoneProcess.inline.svg';
import Button from '../Button/Button.component';
import { InView } from 'react-intersection-observer';

const ProcessSection = () => {
    return (
        <section  id="process" className=" process">
				<div className="content-container">
                    <div className="process-text">
                        <div className="process-header">
                            <h2 className="process-bubble">Section</h2> 

                            <InView triggerOnce rootMargin={'15%'}>
                                {({ inView, ref, entry }) => (
                                    <span ref={ref} className={`arrow ${inView && ('arrowAnim')}`}></span>
                                )}
                            </InView>

                            <h2 className="process-bubble">Four</h2> 

                            <InView triggerOnce rootMargin={'15%'}>
                                {({ inView, ref, entry }) => (
                                    <span ref={ref} className={`arrow ${inView && ('arrowAnim')}`}></span>
                                )}
                            </InView>
                            <h2 className="process-bubble">Component</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillun</p>
                        <Button 
                            btnTarget="#contact" 
                            textColor="#2193B0"
                            outlineColor="#2193B0" 
                            fillColor="#ffffff"
                            hoverTextColor="#ffffff"
                            hoverFillColor="#2193B0"
                                >
                                Scroll to Form
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