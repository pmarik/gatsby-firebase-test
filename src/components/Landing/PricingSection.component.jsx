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
                <h2>Section 5 Component</h2>
                <div className="pricing-container">

                    <InView triggerOnce rootMargin={'15%'}>
                        {({ inView, ref, entry }) => (
                            <div ref={ref} className={`pricing-box box-small anim-start-0 ${inView && 'fadeIn'}`}>
                                <h3>Header1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Header1')} className="highlight jump-txt">Choose Header1</span></Jump>
                                <span className="money">$</span>
                            </div>
                        )}
                    </InView>

                    <InView triggerOnce rootMargin={'15%'}>
                        {({ inView, ref, entry }) => (
                                <div ref={ref} className={`pricing-box box-big anim-start-0 ${inView && 'fadeIn'}`}>
                                    <h3>Header2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                    <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Header2')} className="highlight jump-txt">Choose Header2</span></Jump>
                                    <span className="money">$$</span>
                                </div>
                        )}
                    </InView>

                    <InView triggerOnce rootMargin={'15%'}>
                        {({ inView, ref, entry }) => (
                                <div ref={ref} className={`pricing-box box-small anim-start-0 ${inView && 'fadeIn'}`}>
                                    <h3>Header3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Jump target={'#contact'} options={{offset:-60, duration: 600}}><span onClick={() => handlePricing('Header3')} className="highlight jump-txt">Choose Header3</span></Jump>
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