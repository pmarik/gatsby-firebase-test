import React from 'react';
import { Link } from 'gatsby';

import { AuthUserContext } from '../Auth/Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Public_Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Private_App_Home</Link>
    </li>
    <li>
      <Link to={ROUTES.DASHBOARD}>Private_Dashboard</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Private_Account</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Private_Permission_Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Home</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/blog'>Blog</Link>
    </li>
    <li>
      <Link to='/store'>Store</Link>'
    </li>
    <li>
      <Link to='/contact'>Contact</Link>
    </li>
    <li>
      <Link to='/cart'>Your Cart</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
