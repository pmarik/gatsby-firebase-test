import React from 'react';
import Footer from '../components/footer/Footer'
import Nav from '../components/Navigation/Nav';


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
