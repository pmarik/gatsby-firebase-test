import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

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
                <h2>Featured Projects</h2>
                
                <div className="project-wrap">
                    <div className="project-panels">  
                            <section className="panel">
                                <div className="panel-content">
                                    <h4>Unaffiliated Productions</h4>
                                    <motion.div 
                                        whileHover={{ scale: 1.06 }}
                                        class="sectionimg">
                                            <Link to="/portfolio/unaffiliated-productions"><div class="centered"> View Project</div></Link>
                                            <Link to="/portfolio/unaffiliated-productions"><Img fluid={data.unaffiliatedSite.childImageSharp.fluid} alt="Unaffiliated Productions | Client Case" /></Link>	
                                    </motion.div> 
                                    <p><Link to="/portfolio/unaffiliated-productions" className="highlight">Live production site</Link> developed with accessibility and SEO in mind to drive views and establish credibility...</p>
                                </div>
                            </section>

                            <section className="panel">
                                <div className="panel-content">
                                    <h4>Daymaker Touring</h4>
                                    <motion.div 
                                        whileHover={{ scale: 1.06 }}
                                        class="sectionimg">
                                            <Link to="/portfolio/daymaker-touring"><div className="centered"> View Project</div></Link>
                                            <Link to="/portfolio/daymaker-touring"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>
                                    </motion.div> 
                                    <p><Link to="/portfolio/daymaker-touring" className="highlight">Ecommerce consultation</Link> to improve the design and functionality of a Shopify store to increase conversions... </p>
                                </div>
                                
                            </section>

                            <section className="panel">
                                <div className="panel-content">
                                    <h4>Kogo Foods</h4>
                                    <motion.div 
                                        whileHover={{ scale: 1.06 }}
                                        class="sectionimg">
                                            <Link to="/portfolio/kogo-foods"><div className="centered"> View Project</div></Link>
                                            <Link to="/portfolio/kogo-foods"><Img fluid={data.kogoSite.childImageSharp.fluid} alt="Kogo Foods| Client Case" /></Link>
                                    </motion.div>
                                    <p><Link to="/portfolio/kogo-foods" className="highlight">Gatsby Ecommerce</Link> static site built for speed with Netlify CMS for easy content editing...</p> 
                                </div>
                                
                        </section>
                    
                    </div>
                </div>

                <Link to="/portfolio" className="highlight">View All Projects</Link>

        </section>
    )
}


export default ProjectsSection;
