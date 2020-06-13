import React, { useContext } from 'react'
import { GlobalDispatchContext } from '../../context/GlobalContextProvider';
import Jump from '../Jump.component';
import { InView } from 'react-intersection-observer';
 

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

                    <InView triggerOnce rootMargin={'15%'}>
                        {({ inView, ref, entry }) => (
                            <div ref={ref} className={`pricing-box box-small anim-start-0 ${inView && 'fadeIn'}`}>
                                <h3>Small</h3>
                                <p>Quick development and design changes to your existing website  to take it to the next level. Cost effective and efficient to meet your immediate needs.</p>
                                <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Small Project')} className="highlight jump-txt">Choose Small Project</span></Jump>
                                <span className="money">$</span>
                            </div>
                        )}
                    </InView>

                    <InView triggerOnce rootMargin={'15%'}>
                        {({ inView, ref, entry }) => (
                                <div ref={ref} className={`pricing-box box-big anim-start-0 ${inView && 'fadeIn'}`}>
                                    <h3>Medium</h3>
                                    <p>Development and design with tailored identity and user experience to grow your business and expand your customer base. Choose from pre-made templates or get unique functionality and style to meet the demands of your project.</p>
                                    <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Medium Project')} className="highlight jump-txt">Choose Medium Project</span></Jump>
                                    <span className="money">$$</span>
                                </div>
                        )}
                    </InView>

                    <InView triggerOnce rootMargin={'15%'}>
                        {({ inView, ref, entry }) => (
                                <div ref={ref} className={`pricing-box box-small anim-start-0 ${inView && 'fadeIn'}`}>
                                    <h3>Business</h3>
                                    <p>Looking to hire for long term contracts? Boost your team with a trusted developer. Open for active hiring and consulting.</p>
                                    <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Business Project')} className="highlight jump-txt">Choose Business</span></Jump>
                                    <span className="money">$$$</span>
                                </div>
                            )}
                    </InView>
                </div>
            </div>
        </section>
    )
}

export default PricingSection;