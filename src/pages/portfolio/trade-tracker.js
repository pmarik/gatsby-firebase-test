import React from 'react';
import './portfolio.styles.scss';
import LayoutPublic from '../../components/layout/layout-public';
import { Link, useStaticQuery, graphql } from 'gatsby'; 
import Img from 'gatsby-image';
import { ReactCard, HtmlCard, CssCard, JsCard, SassCard, GitCard, NodeCard } from '../../components/TechnologyCards/TechnologyCards';

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            daymakerTemplate: file(relativePath: {eq: "assets/images/daymakerTemplate.png"}) {
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
            <div className="content-container">
                <section className='portfolio-section'>
                    <h1>Trade Tracker</h1>
                    <div className="case-container">
                        <Img className="project-img" fluid={data.daymakerTemplate.childImageSharp.fluid} alt="Daymaker Touring | Client Case" />
                        <h2>MERN stack application</h2>
                        <p>(<i>To view demo account use email: <b>demo@marik.tech</b> password: <b>Tradedemo1</b></i>) <a href="https://boiling-refuge-41373.herokuapp.com/home" target="_blank">Trade Tracker</a> is an investment journal and calculator for beginners starting out in the stock market. It provides the authentication for a user to journal their investments, calculate how much their investments will cost, and visualize their progress. This personal project uses React on the frontend with Redux to manage state between the different components. The backend is built using Node with MongoDB to store a user's data, and is authenticated using JSON Web Tokens.</p>
						<p>Starting this project from the base-up allowed me to explore a variety of technologys and to iterate on ideas through out the process. I began by using <a href="https://www.figma.com/" target="_blank">Figma</a> to come up with wireframes to visualize both the UI and UX of the app.</p>
						<p>Once I had a relative design and flow of the app planned, I began with the backend. I created models for users and their trades to be able to store them using mongoose and MongoDB. I built out API endpoints using axios to communicate with the database, with standard CRUD routes. I had to iterate a few times on the data models as more pieces of information became useful to add to a user's data.</p>
                        <p>The next task involved creating the frontend with React. Having a state manager was essential to this project as I included different routes and components that relied on the same data. Redux made things easy with an overall store with reducers and action types to pull data to different parts. A feature I was excited about was created the modals which work both on the journal page to see the details of a trade, and on the watchlist. The watchlist allows a user to enter a trade they are thinking about making, and if they have previously traded that ticker, it will show up on the bottom of the page. A user can then click on that trade and a modal will open up with the last trade they made with that ticker. </p>
                    </div>
                </section>

                <div className="card-container">
                    <ReactCard />
                    <NodeCard />
                    <SassCard />
                    <JsCard />
                    <GitCard />
                </div>

                <span style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Link to="/portfolio/3d-viewer" className="highlight">View Next Project</Link>
                </span>

            </div>
        </main>
)};

export default () => (
  <LayoutPublic>
    <ProjectPage />
  </LayoutPublic>
);
 