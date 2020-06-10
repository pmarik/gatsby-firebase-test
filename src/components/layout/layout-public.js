import React, { useEffect, useContext } from 'react';
import Footer from '../Footer/Footer'
import Nav from '../Navigation/Nav';
import './global.styles.scss';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import favicon from '../../../static/images/favicon.ico';
import { GlobalDispatchContext } from '../../context/GlobalContextProvider';

const LayoutPublic = ({ children }) => {

    const dispatch = useContext(GlobalDispatchContext);

    useEffect(() => {
        if( window.location.hash !== '#contact'){
            dispatch({
                type: 'RESET_PRICING',
            })
        }
    }, [window.location.hash])

    return (
        <>
            <Helmet>
                <link 
                    rel="icon"
                    href={favicon}
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch-icon.png`}
                />

                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-32x32.png`}
                    sizes="32x32"
                />

                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link rel="manifest" href={`${withPrefix('/')}assets/site.webmanifest`} />

                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />

                <meta name="theme-color" content="#fff" />
                <meta name="msapplication-TileColor" content="#00a300"></meta>

                <meta property="og:type" content="business.business" />
            </Helmet>
            <Nav /> 
                {children}
            <Footer />
        </>
    );
}


export default LayoutPublic;
