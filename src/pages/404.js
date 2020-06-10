import React, { useContext} from 'react';
import LayoutPublic from '../components/layout/layout-public';
import SEO from '../components/SEO.component';
import { Link } from 'gatsby'
import { GlobalDispatchContext } from '../context/GlobalContextProvider';


const LostPage = () => {

    const dispatch = useContext(GlobalDispatchContext);

    const handleClick = () => {
        dispatch({
            type: 'TOGGLE_CONTACT',
            payload: true
        })
    }

    return(
        <main className="page-container">
            <div className="content-container anim-start-0 fadeIn" style={{minHeight: '60vh'}}>
                <section style={{paddingTop: 'calc(3.25rem + 45px)', textAlign: 'center'}}>
                    <h1 style={{marginBottom: '25px'}}>Sorry, the page you requested is not available</h1>
                    <p>Please <a onClick={handleClick} href="#contact" className="highlight">let me know</a> about this issue. Otherwise, return back to the <Link to="/" className="highlight">home page</Link> or <Link to="/portfolio" className="highlight">view my portfolio.</Link></p>
                </section>
            </div>
        </main>
)};

export default () => (
  <LayoutPublic>
    <SEO />
    <LostPage />
  </LayoutPublic>
);
