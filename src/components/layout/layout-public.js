import React, { useEffect, useContext } from 'react';
import Footer from '../Footer/Footer'
import Nav from '../Navigation/Nav';
import './global.styles.scss';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import favicon from '../../../static/images/favicon.ico';
import { GlobalDispatchContext } from '../../context/GlobalContextProvider';
import SEO from '../SEO.component'

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
            <SEO />
            <Nav /> 
                {children}
            <Footer />
        </>
    );
}


export default LayoutPublic;
