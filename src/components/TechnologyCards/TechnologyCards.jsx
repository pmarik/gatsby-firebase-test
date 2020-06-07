import React from 'react';
import './technologyCards.styles.scss'
import shopify from '../../assets/images/shopifyLogo.svg';
import htmlLogo from '../../assets/images/htmlLogo.svg';
import cssLogo from '../../assets/images/cssLogo.svg';
import jsLogo from '../../assets/images/jsLogo.svg';


const FlipCard = ({ name, srcImage, imgWidth, imgHeight}) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner" style={{width: `${imgWidth}`, height: `${imgHeight}`}}>
                <div className="flip-card-front" style={{width: `${imgWidth}`}}>
                    <img src={srcImage}  alt={name} />
                </div>
                <div className="flip-card-back" >
                    <p>{ name }</p>
                </div>
            </div>
        </div>	
    )
}

export const ShopifyCard = () => (
    <FlipCard name="Shopify" srcImage={shopify} imgWidth="75px" imgHeight="70px" />
)


export const HtmlCard = () => (
    <FlipCard name="HTML" srcImage={htmlLogo} imgWidth="60px" imgHeight="70px"/>
)

export const CssCard = () => (
    <FlipCard name="CSS" srcImage={cssLogo} imgWidth="60px" imgHeight="70px"/>
)

export const JsCard = () => (
    <FlipCard name="Javascript" srcImage={jsLogo} imgWidth="60px" imgHeight="70px"/>
)
	