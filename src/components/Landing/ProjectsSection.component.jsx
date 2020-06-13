import React, {useEffect} from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
//import { motion } from 'framer-motion';
import VisibilitySensor from '../animations/VisibilitySensor.component';
//import { containerVariants } from '../animations/animate.utils';

const ProjectsSection = () => {
    const data = useStaticQuery(graphql`
        query {
            unaffiliatedSite: file(relativePath: {eq: "assets/images/unaffiliatedSite-min.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            daymakerSite: file(relativePath: {eq: "assets/images/daymakerSite-min.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            kogoSite: file(relativePath: {eq: "assets/images/kogoPerspective-min.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    let isSmall = false;

    useEffect(()=> {
        if (window !== 'undefined'){
            if (window.innerWidth <= 739){
                isSmall = true;
            }
            else{
                isSmall = false;
            }
        }
    }, [])

 
    return (
        <section className="home-section featured-projects" id="projects">
                <h2>Featured Projects</h2>
                
                <div className="project-wrap">
                    <div className="project-panels">

                        <VisibilitySensor
                            once
                            partialVisibility
                        >
                            {({ isVisible }) => (
                                <section className={`panel anim-start-0 ${isVisible && 'fadeIn'}`}>
                                    <div className="panel-content">
                                        <h4>Unaffiliated Productions</h4>
                                        <div  className="sectionimg">                                           
                                                <Link to="/portfolio/unaffiliated-productions"><div className="centered"> View Project</div></Link>
                                                <Link to="/portfolio/unaffiliated-productions"><Img fluid={data.unaffiliatedSite.childImageSharp.fluid} alt="Unaffiliated Productions | Client Case" /></Link>	
                                        </div> 
                                        <p><Link to="/portfolio/unaffiliated-productions" className="highlight">Live production site</Link> developed with accessibility and SEO in mind to drive views and establish credibility...</p>
                                    </div>
                                </section>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor
                            once
                            partialVisibility
                        >
                            {({ isVisible }) => (
                                <section className={`panel anim-start-0 ${isVisible && 'fadeIn'}`}>
                                    <div className="panel-content">
                                        <h4>Daymaker Touring</h4>
                                        <div className="sectionimg">
                                                <Link to="/portfolio/daymaker-touring"><div className="centered"> View Project</div></Link>
                                                <Link to="/portfolio/daymaker-touring"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>
                                        </div> 
                                        <p><Link to="/portfolio/daymaker-touring" className="highlight">Ecommerce consultation</Link> to improve the design and functionality of a Shopify store to increase conversions... </p>
                                    </div>
                                </section>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor
                            once
                            partialVisibility
                        >
                            {({ isVisible }) => (
                                <section className={`panel anim-start-0 ${isVisible && 'fadeIn'}`}>
                                    <div className="panel-content">
                                        <h4>Kogo Foods</h4>
                                        <div className="sectionimg">
                                                <Link to="/portfolio/kogo-foods"><div className="centered"> View Project</div></Link>
                                                <Link to="/portfolio/kogo-foods"><Img fluid={data.kogoSite.childImageSharp.fluid} alt="Kogo Foods| Client Case" /></Link>
                                        </div>
                                        <p><Link to="/portfolio/kogo-foods" className="highlight">Gatsby Ecommerce</Link> static site built for speed with Netlify CMS for easy content editing...</p> 
                                    </div>   
                                </section>
                            )}
                        </VisibilitySensor>
                    
                    </div>
                </div>

                <Link to="/portfolio" className="highlight">View All Projects</Link>

        </section>
    )
}


export default ProjectsSection;
