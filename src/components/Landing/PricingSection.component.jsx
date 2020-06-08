import React from 'react'
import { Link } from 'gatsby';
 

const PricingSection = () => {

    const handlePricing = (pricing) => {
        console.log(pricing)
    }

    return (
        <section  id="pricing" className="pricing">
				<div class="content-container">
                    <h2>Select Your Project</h2>
                    <div className="pricing-container">
                        <div className="pricing-box box-small">
                            <h3>Small</h3>
                            <p>Quick development and design changes to your existing website  to take it to the next level. Cost effective and efficient to meet your immediate needs.</p>
                            <p><Link to="#contact"  onClick={() => handlePricing('Small Project')} className="highlight">Choose Small project</Link></p>
                            <span className="money">$</span>
                        </div>

                        <div className="pricing-box box-big">
                            <h3>Medium</h3>
                            <p>Development and design with tailored identity and user experience to grow your business and expand your customer base. Choose from pre-made templates or get unique functionality and style to meet the demands of your project.</p>
                            <p><Link to="#contact" onClick={() => handlePricing('Medium Project')} className="highlight">Choose Medium project</Link></p>
                            <span className="money">$$</span>
                        </div>

                        <div className="pricing-box box-small">
                            <h3>Business</h3>
                            <p>Looking to hire for long term contracts? Boost your team with a trusted developer. Open for active hiring and consulting.</p>
                            <p><Link to="#contact"  onClick={() => handlePricing('Business Project')} className="highlight">Choose Business</Link></p>
                            <span className="money">$$$</span>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default PricingSection;