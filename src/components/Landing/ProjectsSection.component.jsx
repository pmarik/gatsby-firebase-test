import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProjectsSection = () => {
    const data = useStaticQuery(graphql`
        query {
            unaffiliatedSite: file(relativePath: {eq: "assets/images/unaffiliatedSite.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            daymakerSite: file(relativePath: {eq: "assets/images/daymakerSite.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            kogoSite: file(relativePath: {eq: "assets/images/kogoPerspective.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section id="projects" className="home-section featured-projects">
            <div className="content-container">
                <h2>Featured Projects</h2>
                
                <div className="project-wrap">
                    <div className="project-panels">  
                            <section className="panel anim" id="anim-slow">
                                <div className="panel-content">
                                    <h4>Unaffiliated Productions</h4>
                                    <div class="sectionimg">
                                            <Link to="/portfolio"><div class="centered"> View Project</div></Link>
                                            <Link to="/portfolio"><Img fluid={data.unaffiliatedSite.childImageSharp.fluid} alt="Unaffiliated Productions | Client Case" /></Link>	
                                    </div> 
                                    <p><Link to="/portfolio">Live production site</Link> developed with accessibility and SEO in mind to drive views and establish credibility...</p>
                                </div>
                                
                            </section>

                            <section className="panel anim" id="anim-med">
                                <div className="panel-content">
                                    <h4>Daymaker Touring</h4>
                                    <div class="sectionimg">
                                        <Link to="/portfolio"><div className="centered"> View Project</div></Link>
                                        <Link to="/portfolio"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>
                                    </div> 
                                    <p><a href="./projects/case_daymaker.html">Ecommerce consultation</a> to improve the design and functionality of a Shopify store to increase conversions... </p>
                                </div>
                                
                            </section>

                            <section className="panel anim" id="anim-fast">
                                <div className="panel-content">
                                    <h4>Kogo Foods</h4>
                                    <div className="sectionimg">
                                        <Link to="/portfolio"><div className="centered"> View Project</div></Link>
                                        <Link to="/portfolio"><Img fluid={data.kogoSite.childImageSharp.fluid} alt="Kogo Foods| Client Case" /></Link>
                                    </div>
                                    <p><a href="./projects/kogo.html">Gatsby Ecommerce</a> static site built for speed with engaging interactions. Netlify CMS for easy content editing...</p> 
                                </div>
                                
                        </section>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ProjectsSection;
