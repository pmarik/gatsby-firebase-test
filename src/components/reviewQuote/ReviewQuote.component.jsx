import React from 'react';
import './reviewQuote.styles.scss';

const ReviewQuote = ({ children }) => {
    return (
        <aside class="case-review">
            { children }
        </aside>
    )
}

export default ReviewQuote;