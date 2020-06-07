import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { ShopifyCard, HtmlCard, CssCard, JsCard } from '../../components/TechnologyCards/TechnologyCards';
import ReviewQuote from '../../components/reviewQuote/ReviewQuote.component';

const ProjectDaymakerPage = () => {
    const data = useStaticQuery(graphql`
        query {
            daymakerTemplate: file(relativePath: {eq: "assets/images/daymakerTemplate.png"}) {
                childImageSharp {
                    fluid(maxWidth: 776) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)


    return (
        <main className="page-container">
            <div className="content-container">
                <section className='portfolio-section'>
                    <h1>Client Case: Daymaker Touring</h1>
                    <div className="case-container">
                        <Img className="project-img" fluid={data.daymakerTemplate.childImageSharp.fluid} alt="Daymaker Touring | Client Case" />
                        <h2>Shopify consultation</h2>
                        <p><a className="highlight" href="https://www.daymakertouring.com/collections/store/products/alpine-touring-adapters" target="_blank" rel="noopener" rel="noreferrer">Daymaker Touring</a> required updates to their product page, added functionality to their cart page, and design changes on their Shopify store. This required understanding of the Shopify Liquid template language and content management systems. </p>
                        <p>First, a consulation was made with the client to understand what problems they were having. Since this client is local I was able to meet with them in person and establish trust in the work. We reviewed their goals and what would be the best way to accomplish them.</p>
                        <p>One of the first issues to resolve with the site was strictly structural and included a few tweaks to design. The HTML and CSS of the product page needed to be reformated to resize properly to the page. After that, functionality was improved to include clickable elements to redirect a user to certain information about a product on the page. This was done by emphasizing a call-to-action and following a user-centered approach to direct the user through the information on the page to lead to a purchase.</p>
                        <p>The next task involved creating a deposit product that would automatically be added to the user's cart after buying a rental product. This critcal task protected the client from a user purchasing a rental without adding the deposit to the cart. This required making a AJAX request for each variant of a product and validating that it matched the correct quantity and type. Once the cart was updated, protections had to be made so a user couldn't alter the number of the deposit or delete it entirely from the cart. I added functionality to only remove this deposit after removing a rental product.</p>                            
                        <p>This project gave me the opportunity to work with the Shopify content management system, and it exposed me to a new kind of development environment that I had to quickly learn. I set to work with milestones that were delivered to the client after each completion.</p>
                    </div>
                </section>

                <div className="card-container">
                    <ShopifyCard />
                    <HtmlCard />
                    <CssCard />
                    <JsCard />
                </div>

                <ReviewQuote>
                    <q>I recently contracted Paul at Marik Tech for website development and was thoroughly impressed with his ability to take an idea and translate it into a visually appealing and dynamic website. Mr. Marik was able to combine functionality with simplicity, especially when it came to setting up a CMS so I could manage my site. He made it effortless to edit content! In addition, he set me up with a secure way to accept payments through Stripe, so I was able to avoid the monthly costs associated with some other ecommerce platforms. I am extremely happy with his work and appreciate his professional etiquette and diligence.</q> 
                    <p>Simon Roca - <i>Kogo Foods</i></p>
                </ReviewQuote>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/unaffiliated-productions" className="highlight">View Next Project</Link>
                </span>

            </div>
        </main>
)};

export default () => (
  <LayoutPublic>
    <ProjectDaymakerPage />
  </LayoutPublic>
);
 