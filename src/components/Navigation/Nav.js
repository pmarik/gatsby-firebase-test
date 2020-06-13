import React, { useContext, useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import { GlobalDispatchContext } from '../../context/GlobalContextProvider';
import './nav.styles.scss';
import logo from '../../assets/images/logo-script.svg';
import logoSmall from '../../assets/images/logoSmall.svg';
import Jump from '../Jump.component';

const Nav = () => {

    const dispatch = useContext(GlobalDispatchContext);
    const [contactIsActive, toggleContactIsActive] = useState(false)

    useEffect(() => {
        if (window.location.hash === '#contact') toggleContactIsActive(true);
    }, []);

    const toggleContact = (toggleValue) => {
        dispatch({
            type: 'TOGGLE_CONTACT',
            payload: toggleValue,
        })
        toggleContactIsActive(toggleValue);
    }

    const contactClick = (e) => {
        toggleContact(true);
    }

    const navClick = () => {
        toggleContact(false);
    }

    const routeHome = () => {
        navigate(`/`)
    }

    return (
        <header>
            <nav>
                <img src={logo} onClick={routeHome} className="logoBig" alt="Marik Tech" style={{width: '200px'}}/>
                <img src={logoSmall} onClick={routeHome} className="logoSmall" alt="Marik Tech" style={{width: '40px'}} />
 
                <ul className='nav-links'>
                    <li>
                        <Link to='/' activeClassName='active' className={`${contactIsActive && 'hideActive'}`} onClick={navClick}>Home</Link>
                    </li>
                    <li>
                        <Link to='/portfolio' activeClassName='active' partiallyActive className={`${contactIsActive && 'hideActive'}`} onClick={navClick}>Portfolio</Link>
                    </li>
                    <li>
                        {/* <a href="#contact" className={`${contactIsActive && "active"}`} onClick={contactClick}>
                            Contact
                        </a> */}
                        <Jump target={'#contact'} ><span className={`${contactIsActive && "active"}`} onClick={contactClick}>Contact</span></Jump>
                    </li>
                </ul>
            </nav> 
        </header>
    )
}

export default Nav;