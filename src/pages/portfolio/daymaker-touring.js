import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { ShopifyCard, HtmlCard, CssCard, JsCard } from '../../components/TechnologyCards/TechnologyCards';
import ReviewQuote from '../../components/reviewQuote/ReviewQuote.component';
import SEO from '../../components/SEO.component';

const ProjectDaymaker = ({ data }) => (
        <main className="page-container">
            <SEO title="Marik Tech | Portfolio - Daymaker Touring" />
            <div className="content-container anim-start-0 fadeIn">
                <section className='portfolio-section'>
                    <h1>Client Case: Daymaker Touring</h1>
                    <div className="case-container">
                        <Img 
                            className="project-img" 
                            fluid={data.daymakerTemplate.childImageSharp.fluid} 
                            loading="eager"
                            fadeIn={false}
                            alt="Daymaker Touring | Client Case" />
                        <h2>Shopify consultation</h2>
                        <p><a className="highlight" href="https://www.daymakertouring.com/collections/store/products/alpine-touring-adapters" target="_blank" rel="noreferrer noopener" >Daymaker Touring</a> required updates to their product page, added functionality to their cart page, and design changes on their Shopify store. This required understanding of the Shopify Liquid template language and content management systems. </p>
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
                    <q>Working with Marik Tech was a perfect, easy solution for my small business. I built my own shopify website but certain items were very difficult to customize in the end. Paul was able to quickly diagnose web errors and within hours perform fixes that would have taken a full week of my time to research and implement. Marik Tech's professional services and flexibility has allowed me to focus on what I do best at Daymaker Touring rather than wasting countless hours in the rabit hole.</q> 
                    <p>Giray Dadali - <i>Daymaker Touring LLC</i></p>
                </ReviewQuote>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/unaffiliated-productions" className="highlight">View Next Project</Link>
                </span>

            </div>
        </main>
);

const ProjectPageDaymaker = ({ data }) => (
    <LayoutPublic>
        <ProjectDaymaker data={data}/>
    </LayoutPublic>
)

export default ProjectPageDaymaker
 
export const query = graphql` 
    query ProjectPageDaymaker{
        daymakerTemplate: file(relativePath: {eq: "daymakerTemplate-min.png"}) {
            childImageSharp {
                fluid(maxWidth: 776) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`
