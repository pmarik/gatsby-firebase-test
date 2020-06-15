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
					<h2>Services</h2> 

					<div className="service-description">
						<p>Your site, your brand. Experience what a personalized online presence can do for your business. I make your ideas a reality with the following focus:</p>
					</div>

					<div className="features">

						<section>

							<InView triggerOnce rootMargin={'15%'}>
								{({ inView, ref, entry }) => (
									<StyledSpan ref={ref} className='icon icon-code' visibility={inView ? 'true' : 'false'}></StyledSpan>
									// <span className={`icon icon-code ${isVisible && 'animService1'}`}></span>
								)}
                        	</InView>

							<h4>Web Development</h4>
							<p>Whether you are looking to create your own site from the ground-up, or improve the site you currently have, I will work with you to bring your ideas to life.</p>
						</section>

                        <section>


							<InView triggerOnce rootMargin={'15%'}>
								{({ inView, ref, entry }) => (
									<StyledSpan ref={ref} className='icon icon-screen delay1' visibility={inView ? 'true' : 'false'}></StyledSpan>
								)}
							</InView>

							<h4>Design and Identity</h4>
							<p>Update your site to a modern look and feel to gain additional exposure with a powerful brand identity and online experience. </p>
						</section>
                        <section>


							<InView triggerOnce rootMargin={'15%'}>
								{({ inView, ref, entry }) => (			
									<StyledSpan ref={ref} className='icon icon-link delay2' visibility={inView ? 'true' : 'false'}></StyledSpan>
								)}
							</InView>

							<h4>SEO and Marketing</h4>
							<p>Semantic HTML with the latest tools to improve your site rank. Get consultation on design and how to better improve your sales copy.</p>
						</section>
						<section>


							<InView triggerOnce rootMargin={'15%'}>
								{({ inView, ref, entry }) => (
									<StyledSpan ref={ref} className='icon icon-settings delay3' visibility={inView ? 'true' : 'false'}></StyledSpan>
								)}
							</InView>
							<h4>Site Performance and Speed</h4>
							<p>Don't lose potential customers due to a slow website. Increase the load speed of your site to prevent users from leaving prematurely.</p>
						</section>
					</div>
        </section>
)


export default ServicesSection;