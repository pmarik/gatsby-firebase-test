import React from 'react';
import Footer from '../footer/Footer'
import Nav from '../Navigation/Nav';
import './global.styles.scss';


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
