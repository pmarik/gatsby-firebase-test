import React, { useContext } from 'react';
import GlobalContextProvider from './src/context/GlobalContextProvider';


export const wrapRootElement = ({ element }) => {
    return <GlobalContextProvider>{element}</GlobalContextProvider>
}

if(window && typeof window !== "undefined"){
    require("smooth-scroll")('a[href*="#"]')
}

