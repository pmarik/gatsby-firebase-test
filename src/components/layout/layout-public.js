import React from 'react';
import Footer from '../Footer/Footer'
import Nav from '../Navigation/Nav';
import './global.styles.scss';
import { Helmet } from 'react-helmet';


const LayoutPublic = ({ children }) => {
    return (
        <>
            <Nav /> 
                {children}
            <Footer />
        </>
    );
}


export default LayoutPublic;
