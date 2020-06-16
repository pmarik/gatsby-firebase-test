import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { ReactCard, JsCard, SassCard, GitCard, NodeCard } from '../../components/TechnologyCards/TechnologyCards';
import SEO from '../../components/SEO.component';

const ProjectTrade = ({ data }) => (
        <main className="page-container">
            <SEO title="Test Site | Sub Page" />
            <div className="content-container anim-start-0 fadeIn">
                <section className='portfolio-section'>
                    <h1>Sub Page Header Text</h1>
                    <div className="case-container">
                        <Img 
                            className="project-img" 
                            fluid={data.tradetrackerSite.childImageSharp.fluid}
                            loading="eager"
                            fadeIn={false} 
                            alt="Trade Tracker | Project" />
                        <h2>Sub Header For Page</h2>
						<p>(<i>Lorem ipsum dolor sit amet, <b>slkdjfk ckd </b> <b>Lorem ipsum</b></i>) <a href="https://boiling-refuge-41373.herokuapp.com/home" target="_blank" rel="noreferrer">Trade Tracker</a>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. eu fugiat nulla pariatur. Excepteur.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cil</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non lorem nisi ut aliquipdk.</p>
                        <div className="project-inline-wrap">
                            <Img className="project-img-inline" fluid={data.tradeJournal.childImageSharp.fluid} alt="Trade Tracker | Client Case" />
                            <Img className="project-img-inline" fluid={data.tradeModal.childImageSharp.fluid} alt="Trade Tracker | Client Case" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce</p>
                    </div>
                </section>

                <div className="card-container">
                    <ReactCard />
                    <NodeCard />
                    <SassCard />
                    <JsCard />
                    <GitCard />
                </div>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/3d-viewer" className="highlight no-review">View Next Project</Link>
                </span>

            </div>
        </main>
);

const ProjectPageTrade = ({ data }) => (
  <LayoutPublic>
    <ProjectTrade data={data} />
  </LayoutPublic>
);

export default ProjectPageTrade;

export const query = graphql`
    query ProjectPageTrade{
        tradetrackerSite: file(relativePath: {eq: "tradetrackerSite-min.png"}) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        tradeJournal: file(relativePath: {eq: "tradeTracker_journal-min.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        tradeModal: file(relativePath: {eq: "tradeTracker_prevModal-min.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`
 