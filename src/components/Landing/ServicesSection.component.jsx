import React from 'react'
import VisibilitySensor from '../animations/VisibilitySensor.component';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Jump from '../Jump.component';

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

	${props => props.visibility &&
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
		${props => props.visibility &&
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



const iconTestVariant = {
	initial: {
		opacity: 0,
		scale: 0.1,
	},
	end: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			delay: 0.25,
			stiffness: 80,
			duration: 0.8,
		}
	}
}

const ServicesSection = () => {
    return (
        <section className="home-section services" id="services">
				{/* <div className="content-container"> */}
					<h2>Services</h2> 

					<div className="service-description">
						<p>Your site, your brand. Experience what a personalized online presence can do for your business. I make your ideas a reality with the following focus:</p>
					</div>

					<div className="features">
						<section>
							<VisibilitySensor
								once
								partialVisibility
							>
								{({ isVisible }) => (
									// <StyledSpan className='icon icon-code' visibility={isVisible}></StyledSpan>
									// <span className={`icon icon-code ${isVisible && 'animService1'}`}></span>
									<motion.span 
										variants={iconTestVariant}
										initial='initial'
										animate={isVisible ? 'end' : 'initial'}
										className='icon icon-code'>
									</motion.span>
								)}
                        	</VisibilitySensor>
							<h4>Web Development</h4>
							<p>Whether you are looking to create your own site from the ground-up, or improve the site you currently have, I will work with you to bring your ideas to life.</p>
						</section>
                        <section>
							<VisibilitySensor
									once
									partialVisibility
							>
								{({ isVisible }) => (
									<motion.span 
										variants={iconTestVariant}
										initial='initial'
										animate={isVisible ? 'end' : 'initial'}
										className='icon icon-screen delay1' 
									>
									</motion.span>
								)}
							</VisibilitySensor>
							<h4>Design and Identity</h4>
							<p>Update your site to a modern look and feel to gain additional exposure with a powerful brand identity and online experience. </p>
						</section>
                        <section>
							<VisibilitySensor
									once
									partialVisibility
							>
								{({ isVisible }) => (
									<motion.span 
										variants={iconTestVariant}
										initial='initial'
										animate={isVisible ? 'end' : 'initial'}
										className="icon icon-link delay2" 
									></motion.span>
								)}
							</VisibilitySensor>
							<h4>SEO and Marketing</h4>
							<p>Semantic HTML with the latest tools to improve your site rank. Get consultation on design and how to better improve your sales copy.</p>
						</section>
						<section>
							<VisibilitySensor
										once
										partialVisibility
							>
								{({ isVisible }) => (
									<motion.span 
									variants={iconTestVariant}
										initial='initial'
										animate={isVisible ? 'end' : 'initial'}
										className="icon icon-settings delay3"
									></motion.span>
								)}
							</VisibilitySensor>
							<h4>Site Performance and Speed</h4>
							<p>Don't lose potential customers due to a slow website. Increase the load speed of your site to prevent users from leaving prematurely.</p>
						</section>
					</div>
				{/* </div> */}
        </section>
    )
}

export default ServicesSection;