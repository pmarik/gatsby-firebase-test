import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';

const PortfolioGrid = () => {
    const data = useStaticQuery(graphql`
        query {
            daymakerSite: file(relativePath: {eq: "assets/images/daymakerSite.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            unaffiliatedSite: file(relativePath: {eq: "assets/images/unaffiliatedSite.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            kogoSite: file(relativePath: {eq: "assets/images/kogoPerspective.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            viewer3d: file(relativePath: {eq: "assets/images/3d-viewer-site.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            tradetrackerSite: file(relativePath: {eq: "assets/images/tradetrackerSite.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div className="portfolio-grid">
            <div className="portfolio-img-preview sun">
                <Link to="/portfolio/daymaker-touring"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview lime">
                <Link to="/portfolio/unaffiliated-productions"><Img fluid={data.unaffiliatedSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview peach">
                <Link to="/portfolio/kogo-foods"><Img fluid={data.kogoSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview blue">
             <Link to="/portfolio/trade-tracker"><Img fluid={data.tradetrackerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview mist">
                <Link to="/portfolio/3d-viewer"><Img fluid={data.viewer3d.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div> 
        </div>
    )
}

export default PortfolioGrid;