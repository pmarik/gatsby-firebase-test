import React from 'react';
import FlagBtn from '../../assets/images/flagButton.inline.svg'
import './button.styles.scss';
import styled from 'styled-components';

const StyledA = styled.a`
    span{
        ${props => props.direction === 'left' && 'padding-right: 0rem; padding-left: 1rem;'}
        color: ${props => props.textColor}
    }
    svg {
        ${props => props.direction === 'left' && 'transform: scaleX(-1);'}
        .outlineColor{
            fill: ${props => props.outlineColor };
        }
        .innerColor {
            fill: ${props => props.fillColor};
        }
    }

    &:hover{
        span {
            color: ${props => props.hoverTextColor} !important;
        }
        svg {
            .innerColor{
                fill: ${props => props.hoverFillColor};
            }
        }
    }

    &:focus{
        outline: none !important;
        &::-moz-focus-inner{border: 0;}

        svg{
            filter: drop-shadow(0px 0px 4px #1A678E);
        }
    }
`

const StyledButton = styled.button`
    span{
        color: ${props => props.textColor}
    }
    svg {
        .outlineColor{
            fill: ${props => props.outlineColor };
        }
        .innerColor {
            fill: ${props => props.fillColor};
        }
    }

    &:hover, &:focus{
        outline: none !important;
        &::-moz-focus-inner{border: 0;}
        span {
            color: ${props => props.hoverTextColor} !important;
        }
        svg {
            .innerColor{
                fill: ${props => props.hoverFillColor};
            }
            filter: drop-shadow(0px 0px 7px #1A678E);
        }
    }
`



const Button = ({ children, btnTarget, direction, outlineColor, fillColor, textColor, hoverFillColor, hoverTextColor }) => {
    return (
        <StyledA href={`${btnTarget}`} className="flag-btn-container" 
            textColor={textColor}
            outlineColor={outlineColor} 
            fillColor={fillColor} 
            hoverFillColor={hoverFillColor} 
            hoverTextColor={hoverTextColor}
            direction={direction}
        >
            <span className="flag-btn btn-text"> {children} </span>
            <FlagBtn/>
        </StyledA>
    )
}

export const ButtonSubmit = ({ children, outlineColor, fillColor, textColor, hoverFillColor, hoverTextColor }) => {
    return (
        <StyledButton type="submit" className="flag-btn-container"
            textColor={textColor}
            outlineColor={outlineColor} 
            fillColor={fillColor} 
            hoverFillColor={hoverFillColor} 
            hoverTextColor={hoverTextColor}
        >
            <span className="flag-btn btn-text"> {children} </span>
            <FlagBtn />
        </StyledButton>
    )
}


export default Button;