import React from 'react'
import PhoneGraphic from '../../assets/images/phoneProcess.inline.svg';


const ProcessSection = () => {
    return (
        <section  id="process" className="home-section process">
				<div class="content-container">
                    <div className="process-text">
                        <h2>
                            <span className="process-bubble">Design</span> 
                            <span className="process-bubble">Develop</span> 
                            <span className="process-bubble">Deploy</span>
                        </h2>
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