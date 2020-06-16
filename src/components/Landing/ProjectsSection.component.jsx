import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { InView } from 'react-intersection-observer';

const ProjectsSection = () => {
    const data = useStaticQuery(graphql`
        query {
            unaffiliatedSite: file(relativePath: {eq: "unaffiliatedSite-min.png"}) {
                childImageSharp {
                    fluid(
                        maxWidth: 800, 
                        srcSetBreakpoints: [350, 700, 1050, 1400],
                        traceSVG: {background: "#f4f4f4", color: "#669AA2"}
                        ) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            daymakerSite: file(relativePath: {eq: "daymakerSite-min.png"}) {
                childImageSharp {
                    fluid(
                        maxWidth: 800, 
                        srcSetBreakpoints: [350, 700, 1050, 1400],
                        traceSVG: {background: "#f4f4f4", color: "#FE9026"}
                        ) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            kogoSite: file(relativePath: {eq: "kogoPerspective-min.png"}) {
                childImageSharp {
                    fluid(
                        maxWidth: 800, 
                        srcSetBreakpoints: [350, 700, 1050, 1400],
                        traceSVG: {background: "#f4f4f4", color: "#D9695F"}
                        ) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    // let isSmall = false;

    // useEffect(()=> {
    //     if (window !== 'undefined'){
    //         if (window.innerWidth <= 739){
    //             isSmall = true;
    //         }
    //         else{
    //             isSmall = false;
    //         }
    //     }
    // }, [])

 
    return (
        <section className="home-section featured-projects" id="projects">
                <h2>Section 2 Component</h2>
                
                <div className="project-wrap">
                    <div className="project-panels">

                        <InView triggerOnce rootMargin={'15%'}>
                            {({ inView, ref, entry }) => (
                                <section ref={ref} className={`panel anim-start-0 ${inView && 'fadeIn'}`}>
                                    <div className="panel-content">
                                        <h4>Sub Header 1</h4>
                                        <div  className="sectionimg">                                           
                                                <Link to="/portfolio/unaffiliated-productions"><div className="centered"> View Project</div></Link>
                                                <Link to="/portfolio/unaffiliated-productions"><Img fluid={data.unaffiliatedSite.childImageSharp.fluid} alt="Unaffiliated Productions | Client Case" /></Link>	
                                        </div> 
                                        <p><Link to="/portfolio/unaffiliated-productions" className="highlight">Link1</Link> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                    </div>
                                </section>
                            )}
                        </InView>
                               
                             

                        <InView triggerOnce rootMargin={'15%'}>
                            {({ inView, ref, entry }) => (
                                <section ref={ref} className={`panel anim-start-0 ${inView && 'fadeIn'}`}>
                                    <div className="panel-content">
                                        <h4>Sub Header 2</h4>
                                        <div className="sectionimg">
                                                <Link to="/portfolio/daymaker-touring"><div className="centered"> View Project</div></Link>
                                                <Link to="/portfolio/daymaker-touring"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>
                                        </div> 
                                        <p><Link to="/portfolio/daymaker-touring" className="highlight">Link2</Link> tdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboriss... </p>
                                    </div>
                                </section>
                            )}
                        </InView>

                          
                        
                        <InView triggerOnce rootMargin={'15%'}>
                            {({ inView, ref, entry }) => (
                                <section ref={ref} className={`panel anim-start-0 ${inView && 'fadeIn'}`}>
                                    <div className="panel-content">
                                        <h4>Sub Header 3</h4>
                                        <div className="sectionimg">
                                                <Link to="/portfolio/kogo-foods"><div className="centered"> View Project</div></Link>
                                                <Link to="/portfolio/kogo-foods"><Img fluid={data.kogoSite.childImageSharp.fluid} alt="Kogo Foods| Client Case" /></Link>
                                        </div>
                                        <p><Link to="/portfolio/kogo-foods" className="highlight">Link3</Link> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p> 
                                    </div>   
                                </section>
                            )}
                        </InView>
                    
                    </div>
                </div>

                <Link to="/portfolio" className="highlight">Page2 link</Link>

        </section>
    )
}


export default ProjectsSection;
