import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Landing page</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;