import React from 'react';
import FlagBtn from '../../assets/images/flagButton.inline.svg'
import './button.styles.scss';

const Button = ({ children, btnTarget }) => {
    return (
        <a href={`${btnTarget}`} className="flag-btn-container">
            <span className="flag-btn btn-text"> {children} </span>
            <FlagBtn />
        </a>
    )
}

export const ButtonSubmit = ({ children }) => {
    return (
        <button type="submit" className="flag-btn-container">
            <span className="flag-btn btn-text"> {children} </span>
            <FlagBtn />
        </button>
    )
}


export default Button;