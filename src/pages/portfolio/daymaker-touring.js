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
            <SEO title="Test Site | Sub Page" />
            <div className="content-container anim-start-0 fadeIn">
                <section className='portfolio-section'>
                    <h1>Sub Page Header Text</h1>
                    <div className="case-container">
                        <Img 
                            className="project-img" 
                            fluid={data.daymakerTemplate.childImageSharp.fluid} 
                            loading="eager"
                            fadeIn={false}
                            alt="Daymaker Touring | Client Case" />
                        <h2>Sub Header for page</h2>
                        <p><a className="highlight" href="https://www.daymakertouring.com/collections/store/products/alpine-touring-adapters" target="_blank" rel="noreferrer noopener" >External link example</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. non proident, sunt in culpa qui officia deserunt mollit anim id es</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. occaecat cupidatat non proident, sunt in culpa qui mollit anim. occaecat cupidatat non proident, sunt in culpa qui occaecat cupidatat non proident, sunt in cu.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh</p>
                    </div>
                </section>

                <div className="card-container">
                    <ShopifyCard />
                    <HtmlCard />
                    <CssCard />
                    <JsCard />
                </div>

                <ReviewQuote>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.  sunt in culpa qui officia deserunt molli lorem</q>
                    <p>John Smith - <i>Example Company LLC</i></p>
                </ReviewQuote>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/unaffiliated-productions" className="highlight">View Next SubPage</Link>
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
