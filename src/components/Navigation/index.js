import React from 'react';
import { Link } from 'gatsby';

import { AuthUserContext } from '../Auth/Session';
import SignOutButton from '../Auth/SignOut';
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
      <Link to={ROUTES.DASHBOARD}>Private_Dashboard</Link>
    </li>
    {/* {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Private_Permission_Admin</Link>
      </li>
    )} */}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  // <ul>
  //   <li>
  //     <Link to={ROUTES.LANDING}>Home</Link>
  //   </li>
  //   <li>
  //     <Link to='/portfolio'>Portfolio</Link>
  //   </li>
  //   <li>
  //     <Link to='/contact'>Contact</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  //   </li>
  // </ul>
  <></>
);

export default Navigation;
