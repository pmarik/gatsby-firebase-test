import React from 'react';
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

const FlipCard = ({ name, srcImage, imgWidth, imgHeight}) => {

    const cardBackHeight = parseInt(imgHeight) + 10;
    return (
        <div className="flip-card">
            <div className="flip-card-inner" style={{width: `${imgWidth}`, height: `${imgHeight}px`}}>
                <div className="flip-card-front" style={{width: `${imgWidth}`}}>
                    <img src={srcImage}  alt={name} />
                </div>
                <div className="flip-card-back" style={{height: `${cardBackHeight}px`}}>
                    <p>{ name }</p>
                </div>
            </div>
        </div>	
    )
}

export const ShopifyCard = () => (
    <FlipCard name="Shopify" srcImage={shopify} imgWidth="75px" imgHeight="70" />
)


export const HtmlCard = () => (
    <FlipCard name="HTML" srcImage={htmlLogo} imgWidth="60px" imgHeight="70"/>
)

export const CssCard = () => (
    <FlipCard name="CSS" srcImage={cssLogo} imgWidth="60px" imgHeight="70"/>
)

export const JsCard = () => (
    <FlipCard name="Javascript" srcImage={jsLogo} imgWidth="60px" imgHeight="70"/>
)

export const NodeCard = () => (
    <FlipCard name="Node" srcImage={nodeLogo} imgWidth="60px" imgHeight="70" />
)

export const WebpackCard = () => (
    <FlipCard name="Webpack" srcImage={webpackLogo} imgWidth="65px" imgHeight="75"/>
)
    
export const GitCard = () => (
    <FlipCard name="GitHub" srcImage={gitLogo} imgWidth="65px" imgHeight="75" />
)

export const GatsbyCard = () => (
    <FlipCard name="Gatsby" srcImage={gatsbyLogo} imgWidth="65px" imgHeight="75" />
)

export const ReactCard = () => (
    <FlipCard name="React" srcImage={reactLogo} imgWidth="65px" imgHeight="75" />
)

export const NetlifyCard = () => (
    <FlipCard name="Netlify" srcImage={netlifyLogo} imgWidth="65px" imgHeight="75" />
)

export const SassCard = () => (
    <FlipCard name="SCSS" srcImage={sassLogo} imgWidth="65px" imgHeight="75" />
)

export const ThreeCard = () => (
    <FlipCard name="Three.js" srcImage={threeLogo} imgWidth="65" imgHeight="75" />
)