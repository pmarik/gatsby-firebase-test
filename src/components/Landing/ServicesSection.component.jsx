import React from 'react'
import styled from 'styled-components'
import { InView } from 'react-intersection-observer'

const StyledSpan = styled.span`
@keyframes iconAnim{
	from { 
		transform: scale(0, 0);
		opacity: 0;
	}
	to {
		transform: scale(1,1);
		opacity: 1;
		visibility: visible;
	}
  }
  
  @-webkit-keyframes iconAnim{
	0% {
		-webkit-transform: scale(0, 0);
		opacity: 0;
	}
	100% {
		
		-webkit-transform: scale(1,1);
		opacity: 1;
		visibility: visible;
	}
  }

	${props => props.visibility === 'true' &&
		(
			`animation-name: iconAnim;
			 animation-duration: 0.8s;
			 animation-fill-mode: forwards;

			 -webkit-animation-name: iconAnim;
			 -webkit-animation-duration: 0.8s;
			 -webkit-animation-fill-mode: forwards;
			`
		) 
	}

	@media screen and (max-width: 972px){
		${props => props.visibility === 'true' &&
			(
				`animation-name: iconAnim;
				 animation-duration: 0.8s;
				 animation-fill-mode: forwards;
	
				 -webkit-animation-name: iconAnim;
				 -webkit-animation-duration: 0.8s;
				 -webkit-animation-fill-mode: forwards;

				 &.delay1{
					 animation-delay: 0.15;
					-webkit-animation-delay: 0.15s;
				 }

				 &.delay2{
					 animation-delay: 0.3s;
					-webkit-animation-delay: 0.3s;

				 }
				 &.delay3{
					 animation-delay: 0.45s;
					 -webkit-animation-delay: 0.45s;
				 }
				`

			) 
		}
	}

`;


const ServicesSection = () => (
        <section className="home-section services" id="services">
					<h2>Section 3 Component</h2> 

					<div className="service-description">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
					</div>

					<div className="features">

						<section>

							<InView triggerOnce rootMargin={'15%'}>
								{({ inView, ref, entry }) => (
									<StyledSpan ref={ref} className='icon icon-code' visibility={inView ? 'true' : 'false'}></StyledSpan>
									// <span className={`icon icon-code ${isVisible && 'animService1'}`}></span>
								)}
                        	</InView>

							<h4>Description1</h4>
						    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
						</section>

                        <section>


							<InView triggerOnce rootMargin={'15%'}>
								{({ inView, ref, entry }) => (
									<StyledSpan ref={ref} className='icon icon-screen delay1' visibility={inView ? 'true' : 'false'}></StyledSpan>
								)}
							</InView>

							<h4>Description2</h4>
						    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
						</section>
                        <section>


							<InView triggerOnce rootMargin={'15%'}>
								{({ inView, ref, entry }) => (			
									<StyledSpan ref={ref} className='icon icon-link delay2' visibility={inView ? 'true' : 'false'}></StyledSpan>
								)}
							</InView>

							<h4>Description3</h4>
						    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
						</section>
						<section>


							<InView triggerOnce rootMargin={'15%'}>
								{({ inView, ref, entry }) => (
									<StyledSpan ref={ref} className='icon icon-settings delay3' visibility={inView ? 'true' : 'false'}></StyledSpan>
								)}
							</InView>
							<h4>Description4</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
						</section>
					</div>
        </section>
)


export default ServicesSection;