import React from 'react'


const ServicesSection = () => {
    return (
        <section  id="services" className="home-section services">
				<div class="content-container">
					<h2>Services</h2> 

					<div class="service-description">
						<p>Your site, your brand. Experience what a personalized online presence can do for your business. Put your creative dollars where they are most effective. I make your ideas a reality with the following focus:</p>
					</div>

					<div class="features">
						<section>
							<span className="icon icon-code"></span>
							<h4>Frontend Development</h4>
							<p>Whether you are looking to create your own site from the ground-up, or improve the site you currently have, I will work with you to bring your ideas to life.</p>
						</section>
                        <section>
							<span className="icon icon-screen"></span>
							<h4>Design and Identity</h4>
							<p>Update your site to a modern look and feel to gain additional exposure with a powerful brand identity and online experience. </p>
						</section>
                        <section>
							<span className="icon icon-link"></span>
							<h4>SEO and Marketing</h4>
							<p>Semantic HTML with the latest tools to improve your site rank. Get consultation on design and how to better improve your sales copy.</p>
						</section>
						<section>
							<span className="icon icon-settings"></span>
							<h4>Site Performance and Speed</h4>
							<p>Don't lose potential customers due to a slow website. Increase the load speed of your site to prevent users from leaving prematurely.</p>
						</section>
					</div>
				</div>
        </section>
    )
}

export default ServicesSection;