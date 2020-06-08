import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { HtmlCard, CssCard, JsCard, ThreeCard } from '../../components/TechnologyCards/TechnologyCards';
import ReviewQuote from '../../components/reviewQuote/ReviewQuote.component';

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            viewer3d: file(relativePath: {eq: "assets/images/3d-viewer-site.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
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
                    <h1>Project: 3D Viewer</h1>
                    <div className="case-container">
                        <Img className="project-img" fluid={data.viewer3d.childImageSharp.fluid} alt="Daymaker Touring | Client Case" />
                        <h2>3D Model viewing in your browser</h2>
                        <p><a className="highlight" href="https://3d-viewer-demo.netlify.com/" target="_blank" rel="noopener" rel="noreferrer" title="Visit Site">View the browser model viewer</a> for yourself!  This is a project to test out some of the capabilities of <a className="highlight" href="https://threejs.org/" target="_blank" rel="noopener" rel="noreferrer" title="three js">Three.js</a>, a JavaScript framework for displaying 3D content on the web harnessing the power of WebGL. </p>
						<p>This application allows you view a simple 3D laptop and to change various settings. Change the background of the canvas to transparent, black, or white using the toggle buttons next to the background controller. Change the controls from mouse tracking, rotate, to click and drag with the toggle buttons. Note that the mouse tracking controls are only available on desktop. Finally, switch between perspective and orthographic views using the toggle buttons next to the view controls.</p> 
						<p>The laptop model was created in <a className="highlight" href="https://www.blender.org/" target="_blank" rel="noopener" rel="noreferrer" title="Visit Site">Blender</a> and exported as a GLTF resource. This allows for fast loading on the web, even with textures and shading applied to an object.</p>
						<p><a className="highlight" href="https://3d-viewer-demo.netlify.com/" target="_blank" rel="noopener" rel="noreferrer" title="Visit Site">Visit 3D Viewer application here</a></p>
							
                    </div>
                </section>

                <div className="card-container">
                    <ThreeCard />
                    <HtmlCard />
                    <CssCard />
                    <JsCard />
                </div>


                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/daymaker-touring" className="highlight no-review">View Next Project</Link>
                </span>

            </div>
        </main>
)};

export default () => (
  <LayoutPublic>
    <ProjectPage />
  </LayoutPublic>
);
 