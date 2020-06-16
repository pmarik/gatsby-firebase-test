import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { NodeCard, HtmlCard, CssCard, JsCard, WebpackCard, GitCard } from '../../components/TechnologyCards/TechnologyCards';
import ReviewQuote from '../../components/reviewQuote/ReviewQuote.component';
import SEO from '../../components/SEO.component';

const ProjectUnaffiliated = ({ data }) => (
        <main className="page-container">
            <SEO title="Test Site | Sub Page" />
            <div className="content-container anim-start-0 fadeIn">
                <section className='portfolio-section'>
                    <h1>Sub Page Header Text</h1>
                    <div className="case-container">
                        <Img 
                            className="project-img" 
                            fluid={data.unaffiliatedTemplate.childImageSharp.fluid} 
                            loading="eager"
                            fadeIn={false}
                            alt="Unaffiliated Productions | Client Case" 
                        />
                        <h2>Sub Header For Page</h2>
                        <p>Lorem ispsum dolor sit amet <a className="highlight" href="https://unaffiliatedproductions.com/" target="_blank" rel="noreferrer noopener"  title="Visit Site">example external link</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
                    </div>
                </section>

                <div className="card-container">
                    <HtmlCard />
                    <CssCard />
                    <JsCard />
                    <NodeCard />
                    <WebpackCard />
                    <GitCard />
                </div>

                <ReviewQuote>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </q>
                    <p>John Smith - <i>Example Company</i></p>
                </ReviewQuote>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/kogo-foods" className="highlight">View Next SubPage</Link>
                </span>

            </div>
        </main>
);

const ProjectPageUnaffiliated = ({ data }) => (
  <LayoutPublic>
    <ProjectUnaffiliated data={data} />
  </LayoutPublic>
);

export default ProjectPageUnaffiliated;

export const query = graphql`
    query ProjectPageUnaffiliated{
        unaffiliatedTemplate: file(relativePath: {eq: "unaffiliatedTemplate-min.png"}) {
            childImageSharp {
                fluid(maxWidth: 776) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`
 