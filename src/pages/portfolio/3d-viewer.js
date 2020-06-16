import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { HtmlCard, CssCard, JsCard, ThreeCard } from '../../components/TechnologyCards/TechnologyCards';
import SEO from '../../components/SEO.component';

const ProjectViewer = ({ data }) => (
        <main className="page-container">
            <SEO title="Test Site | Sub Page" />
            <div className="content-container anim-start-0 fadeIn">
                <section className='portfolio-section'>
                    <h1>Sub Page Header Text</h1>
                    <div className="case-container">
                        <Img 
                            className="project-img" 
                            fluid={data.viewer3d.childImageSharp.fluid} 
                            loading="eager"
                            fadeIn={false}
                            alt="3D Viewer | Project" 
                        />
                        <h2>Sub Header For Page</h2>
                        <p><a className="highlight" href="https://3d-viewer-demo.netlify.com/" target="_blank" rel="noreferrer noopener"  title="Visit Site">External link example test</a> for yourself!  ullamco laboris nisi ut aliquip ex ea commodo consequat.<a className="highlight" href="https://threejs.org/" target="_blank" rel="noreferrer noopener"  title="three js">Three.js</a>,cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est  sunt in culpa </p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est  sunt in culpa qui officia deserunt mollit an.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur <a className="highlight" href="https://www.blender.org/" target="_blank"  rel="noreferrer noopener" title="Visit Site">External</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                        <p><a className="highlight" href="https://3d-viewer-demo.netlify.com/" target="_blank"  rel="noreferrer noopener" title="Visit Site">Visit external link example test</a></p>
							
                    </div>
                </section>

                <div className="card-container">
                    <ThreeCard />
                    <HtmlCard />
                    <CssCard />
                    <JsCard />
                </div>


                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/daymaker-touring" className="highlight no-review">View Next SubPage</Link>
                </span>

            </div>
        </main>
);

const ProjectPageViewer = ({ data }) => (
    <LayoutPublic>
        <ProjectViewer data={data} />
    </LayoutPublic>
)

export default ProjectPageViewer

export const query = graphql`
    query ProjectPageViewer{
        viewer3d: file(relativePath: {eq: "3d-viewer-site-min.png"}) {
            childImageSharp {
                fluid(
                    maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

