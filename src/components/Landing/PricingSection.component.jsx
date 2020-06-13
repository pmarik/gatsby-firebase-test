import React, { useContext } from 'react'
import { Link } from 'gatsby';
import { GlobalDispatchContext } from '../../context/GlobalContextProvider';
import VisibilitySensor from '../animations/VisibilitySensor.component';
//import styled from 'styled-components'
//import { motion } from 'framer-motion';
//import {  growInVariants } from '../animations/animate.utils';
import Jump from '../Jump.component';


 

const PricingSection = () => {
    const dispatch = useContext(GlobalDispatchContext);

    const handlePricing = (pricing) => {
        dispatch({
            type: 'ADD_PRICING',
            payload: pricing,
        })
    }

    return (
        <section  id="pricing" className="pricing">
				<div className="content-container">
                    <h2>Select Your Project</h2>
                    <div className="pricing-container">

                        <VisibilitySensor
							once
							partialVisibility
						>
                            {({ isVisible }) => (
                            <div className={`pricing-box box-small anim-start-0 ${isVisible && 'fadeIn'}`}>
                                <h3>Small</h3>
                                <p>Quick development and design changes to your existing website  to take it to the next level. Cost effective and efficient to meet your immediate needs.</p>
                                <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Small Project')} className="highlight jump-txt">Choose Small Project</span></Jump>
                                <span className="money">$</span>
                            </div>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor
							once
							partialVisibility
						>
                            {({ isVisible }) => (
                                <div className={`pricing-box box-big anim-start-0 ${isVisible && 'fadeIn'}`}>
                                    <h3>Medium</h3>
                                    <p>Development and design with tailored identity and user experience to grow your business and expand your customer base. Choose from pre-made templates or get unique functionality and style to meet the demands of your project.</p>
                                    <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Medium Project')} className="highlight jump-txt">Choose Medium Project</span></Jump>
                                    <span className="money">$$</span>
                                </div>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor
							once
							partialVisibility
						>
                            {({ isVisible }) => (
                                <div className={`pricing-box box-small anim-start-0 ${isVisible && 'fadeIn'}`}>
                                    <h3>Business</h3>
                                    <p>Looking to hire for long term contracts? Boost your team with a trusted developer. Open for active hiring and consulting.</p>
                                    <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Business Project')} className="highlight jump-txt">Choose Business</span></Jump>
                                    <span className="money">$$$</span>
                                </div>
                            )}
                        </VisibilitySensor>
                    </div>
                </div>
        </section>
    )
}

export default PricingSection;