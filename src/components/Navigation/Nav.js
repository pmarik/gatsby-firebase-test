import React from 'react';
import { Link } from 'gatsby';
import './nav.styles.scss';
import logo from '../../assets/images/logo-script.svg';


const Nav = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Marik Tech" style={{width: '200px'}}/>

                <ul className='nav-links'>
                    <li>
                        <Link to='/' activeClassName="active" >Home</Link>
                    </li>
                    <li>
                        <Link to='/portfolio' activeClassName="active">Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/contact' activeClassName="active" >Contact</Link>
                    </li>
                </ul>
            </nav> 
        </header>
    )
}

export default Nav;