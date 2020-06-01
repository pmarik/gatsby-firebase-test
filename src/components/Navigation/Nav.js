import React from 'react';
import { Link } from 'gatsby';
import './nav.styles.scss';
import logo from '../../assets/images/logo-script.svg';


const Nav = () => {
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="Marik Tech" style={{width: '250px'}}/>
                </div>

                <ul className='nav-links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;