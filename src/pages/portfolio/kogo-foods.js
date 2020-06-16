import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { GatsbyCard, ReactCard, SassCard, NetlifyCard, GitCard } from '../../components/TechnologyCards/TechnologyCards';
import ReviewQuote from '../../components/reviewQuote/ReviewQuote.component';
import KogoScript from '../../../static/img/kogoScript.inline.svg';
import SEO from '../../components/SEO.component';


const ProjectKogo = ({ data }) => (
        <main className="page-container">
            <SEO title="Test Site | Sub Page" />
            <div className="content-container anim-start-0 fadeIn">
                <section className='portfolio-section'>
                    <h1>Sub Page Header Text</h1>
                    <div className="case-container">
                        <Img 
                            className="project-img" 
                            fluid={data.kogoSite.childImageSharp.fluid}
                            loading="eager"
                            fadeIn={false} 
                            alt="Kogo Foods | Client Case" />
                        <h2>Sub Header For Page</h2>
                        <p><a className="highlight" href="https://kogofoods.com/" target="_blank" rel="noreferrer noopener"  title="Visit Site">Test name</a>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min</p>
                        <KogoScript />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupnon</p>
                    </div>
                </section>

                <div className="card-container">
                    <GatsbyCard />
                    <ReactCard />
                    <NetlifyCard />
                    <SassCard />
                    <GitCard />
                </div>

                <ReviewQuote>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure </q>
                    <p>Jan Doe - <i>Test Company</i></p>
                </ReviewQuote>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/trade-tracker" className="highlight">View Next SubPage</Link>
                </span>

            </div>
        </main>
);

const ProjectPageKogo = ({ data}) => (
  <LayoutPublic>
    <ProjectKogo data={data} />
  </LayoutPublic>
);

export default ProjectPageKogo


export const query = graphql`
    query ProjectPageKogo{
        kogoSite: file(relativePath: {eq: "kogoPerspective-min.png"}) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`