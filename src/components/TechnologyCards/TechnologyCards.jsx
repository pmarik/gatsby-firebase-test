import React from 'react';
import styled from 'styled-components';
import './technologyCards.styles.scss'
import shopify from '../../assets/images/shopifyLogo.svg';
import htmlLogo from '../../assets/images/htmlLogo.svg';
import cssLogo from '../../assets/images/cssLogo.svg';
import jsLogo from '../../assets/images/jsLogo.svg';
import nodeLogo from '../../assets/images/nodejsLogo.svg';
import webpackLogo from '../../assets/images/webpackLogo.svg';
import gitLogo from '../../assets/images/gitLogo.svg';
import gatsbyLogo from '../../assets/images/gatsbyLogo.svg';
import reactLogo from '../../assets/images/ReactLogo.svg';
import netlifyLogo from '../../assets/images/netlifyLogo.svg'
import sassLogo from '../../assets/images/sassLogo.svg';
import threeLogo from '../../assets/images/threeLogo.svg';

const StyledDiv = styled.div`
    .flip-card-inner{
        width: ${props => props.imgWidth}px;
        height: ${props => props.imgWidth + 10}px;
        
        .flip-card-front{
            width: ${props => props.imgWidth}px;
        }
        .flip-card-back{
            height: ${props => props.imgWidth + 10}px;
        }
    }

    @media screen and (max-width: 739px){
        .flip-card-inner{
            width: ${props => props.imgWidth - 15}px;
            height: ${props => props.imgWidth - 5}px;
        
            .flip-card-front{
                width: ${props => props.imgWidth - 15}px;
            }
            .flip-card-back{
                height: ${props => props.imgWidth - 5}px;
            }
        }
    }
`;

const FlipCard = ({ name, srcImage, imgWidth }) => {

    return (
        <StyledDiv className="flip-card" imgWidth={imgWidth} >
            <div className="flip-card-inner">
                <div className="flip-card-front" >
                    <img src={srcImage}  alt={name} />
                </div>
                <div className="flip-card-back">
                    <p>{ name }</p>
                </div>
            </div>
        </StyledDiv>	
    )
}

export const ShopifyCard = () => (
    <FlipCard name="Shopify" srcImage={shopify} imgWidth={75} />
)


export const HtmlCard = () => (
    <FlipCard name="HTML" srcImage={htmlLogo} imgWidth={60} />
)

export const CssCard = () => (
    <FlipCard name="CSS" srcImage={cssLogo} imgWidth={60}/>
)

export const JsCard = () => (
    <FlipCard name="Javascript" srcImage={jsLogo} imgWidth={60}/>
)

export const NodeCard = () => (
    <FlipCard name="Node" srcImage={nodeLogo} imgWidth={60} />
)

export const WebpackCard = () => (
    <FlipCard name="Webpack" srcImage={webpackLogo} imgWidth={65}/>
)
    
export const GitCard = () => (
    <FlipCard name="GitHub" srcImage={gitLogo} imgWidth={65} />
)

export const GatsbyCard = () => (
    <FlipCard name="Gatsby" srcImage={gatsbyLogo} imgWidth={65}/>
)

export const ReactCard = () => (
    <FlipCard name="React" srcImage={reactLogo} imgWidth={65} />
)

export const NetlifyCard = () => (
    <FlipCard name="Netlify" srcImage={netlifyLogo} imgWidth={65} />
)

export const SassCard = () => (
    <FlipCard name="SCSS" srcImage={sassLogo}  imgWidth={65}  />
)

export const ThreeCard = () => (
    <FlipCard name="Three.js" srcImage={threeLogo}  imgWidth={65} />
)