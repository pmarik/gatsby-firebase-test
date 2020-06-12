import React, { useEffect, useContext, useState } from 'react';
import Footer from '../footer/Footer.component'
import Nav from '../Navigation/Nav';
import './global.styles.scss';
import { GlobalDispatchContext } from '../../context/GlobalContextProvider';
import SEO from '../SEO.component'

const LayoutPublic = ({ children }) => {

    const dispatch = useContext(GlobalDispatchContext);
    const [windowAvail, setWindowAvail] = useState(null)


    useEffect(() => {
        if(typeof window !== 'undefined'){
            if( window.location.hash !== '#contact'){
                dispatch({
                    type: 'RESET_PRICING',
                })
                setWindowAvail(window.location.hash);
            }
        }
    }, [windowAvail])

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
