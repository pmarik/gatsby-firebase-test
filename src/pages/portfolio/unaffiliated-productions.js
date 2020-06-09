import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { NodeCard, HtmlCard, CssCard, JsCard, WebpackCard, GitCard } from '../../components/TechnologyCards/TechnologyCards';
import ReviewQuote from '../../components/reviewQuote/ReviewQuote.component';
import SEO from '../../components/SEO.component';

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            unaffiliatedTemplate: file(relativePath: {eq: "assets/images/unaffiliatedTemplate.png"}) {
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
            <SEO title="Marik Tech | Portfolio - Unaffiliated Productions" />
            <div className="content-container">
                <section className='portfolio-section'>
                    <h1>Client Case: Unaffiliated Productions</h1>
                    <div className="case-container">
                        <Img className="project-img" fluid={data.unaffiliatedTemplate.childImageSharp.fluid} alt="Daymaker Touring | Client Case" />
                        <h2>Creating a site from the ground up</h2>
                        <p>As web developer for <a className="highlight" href="https://unaffiliatedproductions.com/" target="_blank" rel="noopener" rel="noreferrer" title="Visit Site">Unaffiliated Productions</a> I was hired to implement a site that portrayed the brand and emphasized the videos they produce. A total design of the site began by asking the client the goals of their site. Armed with this information, wireframes were created and iterated upon until a final design was approved by the client.</p>
						<p>This static site was built using a mobile first approach, using semantic HTML, modern CSS practices, and Javascript for interactivity. I was able to quickly execute the design using Node and Webpack to get the development started, and all iterations were stored via GitHub.</p> 
						<p>Speed and accessibility were priorities. Lazy-loading was used to increase the percieved load time of the page and only display videos and pictures when they are in the viewport. The content is built by using best practices for SEO provided by Google. Finally, after completion, the site was checked for performance using auditing tools to make final tweaks to the pages. </p>
						<p>The final site was delivered to the client and quality was ensured by referencing any prior expectations set for the site. This site now serves as the main public stage for Unaffiliated and their customers and helps solidify their brand name.</p>
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
                    <q>Paul was quick to understand what my needs and priorities were. He was detail oriented and worked quickly to make the changes that I was looking for.</q> 
                    <p>Zach Lastrilla - <i>Unaffiliated Productions</i></p>
                </ReviewQuote>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/kogo-foods" className="highlight">View Next Project</Link>
                </span>

            </div>
        </main>
)};

export default () => (
  <LayoutPublic>
    <ProjectPage />
  </LayoutPublic>
);
 