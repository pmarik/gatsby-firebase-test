import React from 'react';
import './reviewQuote.styles.scss';

const ReviewQuote = ({ children }) => {
    return (
        <aside className="case-review">
            { children }
        </aside>
    )
}

export default ReviewQuote;