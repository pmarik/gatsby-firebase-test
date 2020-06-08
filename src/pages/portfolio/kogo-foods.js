import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { GatsbyCard, ReactCard, SassCard, NetlifyCard, GitCard } from '../../components/TechnologyCards/TechnologyCards';
import ReviewQuote from '../../components/reviewQuote/ReviewQuote.component';

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            kogoSite: file(relativePath: {eq: "assets/images/kogoPerspective.png"}) {
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
                    <h1>Client Case: Kogo Foods</h1>
                    <div className="case-container">
                        <Img className="project-img" fluid={data.kogoSite.childImageSharp.fluid} alt="Daymaker Touring | Client Case" />
                        <h2>JAMstack Ecommerce</h2>
                        <p><a className="highlight" href="https://kogofoods.com/" target="_blank" rel="noopener" rel="noreferrer" title="Visit Site">Kogo Foods</a> needed a striking web presence as a platform to sell their products online. This unique opportunity allowed me to fully create the brand identity and develop the site to back it up. This full stack project entailed logo design, prototyping and mockups, and finally a full production ecommerce site.</p>
						<p>I chose to create this site using Gatsby with Netlify CMS. This provided the client with the flexibility and power associated with React to have immersive and engaging interations throughout the site. Netlify CMS enabled the ability to easily create new blog posts, update page text, and create products while abstracting away the complexity of code. This combination provided the client with more functionality than traditional ecommerce platforms, while avoiding all the fees associated with those frameworks.</p> 
                    </div>
                </section>

                <div className="card-container">
                    <GatsbyCard />
                    <ReactCard />
                    <NetlifyCard />
                    <SassCard />
                    <GitCard />
                </div>

                <ReviewQuote>
                    <q>I recently contracted Paul at Marik Tech for website development and was thoroughly impressed with his ability to take an idea and translate it into a visually appealing and dynamic website. Mr. Marik was able to combine functionality with simplicity, especially when it came to setting up a CMS so I could manage my site. He made it effortless to edit content! In addition, he set me up with a secure way to accept payments through Stripe, so I was able to avoid the monthly costs associated with some other ecommerce platforms. I am extremely happy with his work and appreciate his professional etiquette and diligence.</q> 
                    <p>Simon Roca - <i>Kogo Foods</i></p>
                </ReviewQuote>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/trade-tracker" className="highlight">View Next Project</Link>
                </span>

            </div>
        </main>
)};

export default () => (
  <LayoutPublic>
    <ProjectPage />
  </LayoutPublic>
);
 