import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';

const PortfolioGrid = () => {
    const data = useStaticQuery(graphql`
        query {
            daymakerSite: file(relativePath: {eq: "daymakerSite-min.png"}) {
                childImageSharp {
                    fluid(
                        maxWidth: 500,
                        srcSetBreakpoints: [350, 700, 1050, 1400],
                        traceSVG: {background: "#F9BD74", color: "#FE9026"}
                        ) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            unaffiliatedSite: file(relativePath: {eq: "unaffiliatedSite-min.png"}) {
                childImageSharp {
                    fluid(
                        maxWidth: 500,
                        srcSetBreakpoints: [350, 700, 1050, 1400],
                        traceSVG: {background: "#88ECC9", color: "#669AA2"}
                        ) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            kogoSite: file(relativePath: {eq: "kogoPerspective-min.png"}) {
                childImageSharp {
                    fluid(
                        maxWidth: 500,
                        srcSetBreakpoints: [350, 700, 1050, 1400],
                        traceSVG: {background: "#FCA6A4", color: "#D9695F"}
                        ) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            viewer3d: file(relativePath: {eq: "3d-viewer-site-min.png"}) {
                childImageSharp {
                    fluid(
                        maxWidth: 500,
                        srcSetBreakpoints: [350, 700, 1050, 1400],
                        traceSVG: {background: "#F27CC3", color: "#99edd6"}
                        ) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            tradetrackerSite: file(relativePath: {eq: "tradetrackerSite-min.png"}) {
                childImageSharp {
                    fluid(
                        maxWidth: 500,
                        srcSetBreakpoints: [350, 700, 1050, 1400],
                        traceSVG: {background: "#3aC8EC", color: "#3A3E4D"}) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <div className="portfolio-grid">
            <div className="portfolio-img-preview sectionimg sun">
                <Link to="/portfolio/daymaker-touring"><div className="centered"> View Project</div></Link>
                <Link to="/portfolio/daymaker-touring"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview sectionimg lime">
                <Link to="/portfolio/unaffiliated-productions"><div className="centered"> View Project</div></Link>
                <Link to="/portfolio/unaffiliated-productions"><Img fluid={data.unaffiliatedSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview sectionimg peach">
                <Link to="/portfolio/kogo-foods"><div className="centered"> View Project</div></Link>
                <Link to="/portfolio/kogo-foods"><Img fluid={data.kogoSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview sectionimg blue">
                <Link to="/portfolio/trade-tracker"><div className="centered"> View Project</div></Link>
                <Link to="/portfolio/trade-tracker"><Img fluid={data.tradetrackerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview sectionimg mist">
                <Link to="/portfolio/3d-viewer"><div className="centered"> View Project</div></Link>
                <Link to="/portfolio/3d-viewer"><Img fluid={data.viewer3d.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div> 
        </div>
    )
}

export default PortfolioGrid;