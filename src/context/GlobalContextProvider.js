import React, { useReducer } from 'react';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    contactActive: false,
}

function reducer(state, action){
    switch (action.type){
        case "TOGGLE_CONTACT": {
            return {
                ...state,
                contactActive: action.payload,
            }
        }
        default:
            throw new Error('Bad Action Type');
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}


export default GlobalContextProvider;