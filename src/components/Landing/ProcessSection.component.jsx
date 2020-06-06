import React from 'react'
import PhoneGraphic from '../../assets/images/phoneProcess.inline.svg';


const ProcessSection = () => {
    return (
        <section  id="process" className="home-section process">
				<div class="content-container">
                    <div className="process-text">
                        <div className="process-header">
                            <h2 className="process-bubble">Design</h2> 
                            <span className="arrow"></span>
                            <h2 className="process-bubble">Develop</h2> 
                            <span className="arrow"></span>
                            <h2 className="process-bubble">Deploy</h2>
                        </div>
                        <p>Get a guided process from idea to reality. Full design ideation, custom development, and tailored deployment for your online needs. I create pixel perfect designs and engaging experiences to help tell your story in an impactful way. Solidify your brand and sell your services and products online now. </p>
                    </div>
                    <div className="process-image">
                        <PhoneGraphic />
                    </div>
                </div>
        </section>
    )
}

export default ProcessSection; 