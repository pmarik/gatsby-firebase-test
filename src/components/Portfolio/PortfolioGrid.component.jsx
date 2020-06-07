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
        }
    `)

    return (
        <div className="portfolio-grid">
            <div className="portfolio-img-preview">
                <Link to="/portfolio/daymaker-touring"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview">
                <Link to="/portfolio/unaffiliated-productions"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview">
                <Link to="/portfolio/kogo-foods"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview">
             <Link to="/portfolio/trade-tracker"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>

            <div className="portfolio-img-preview">
                <Link to="/portfolio/3d-viewer"><Img fluid={data.daymakerSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" /></Link>	
            </div>
        </div>
    )
}

export default PortfolioGrid;