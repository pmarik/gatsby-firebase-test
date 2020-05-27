import React from 'react';
import { compose } from 'recompose';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { Router } from '@reach/router';
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Auth/Session';
import Project from '../components/Dashboard/Projects/Project'
import Projects from '../components/Dashboard/Projects/Projects';
import Clients from '../components/Dashboard/Clients/Clients';
import Settings from '../components/Dashboard/Settings/Settings';
// TODO messages is another document, 
//import Messages from '../components/Messages';

const DashboardPageBase = () => (
  <div>
    <h1>Dashboard Page</h1>
    <p>User dashboard</p>
    <ul>
      <li>
        <Link to="/dashboard/projects">view projects</Link>
      </li>
      <li>
        <Link to="/dashboard/clients">view clients</Link>
      </li>
      <li>
        <Link to='/dashboard/settings'>settings</Link>
      </li>
    </ul>

    {/* <Messages /> */}
    <Router>
      <Projects path='/dashboard/projects'>
        <Project path='/:projectId' />
      </Projects>
      <Clients path='/dashboard/clients' />
      <Settings path='/dashboard/settings' />
    </Router>
  </div>
);

 // TODO decide permission based, or role based access. 
 /*
  In current form (authuser => !!authUser) if does broad auth check to see if user is not null
 */
const condition = authUser => !!authUser;


const DashboardPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(DashboardPageBase);

export default () => (
  <Layout>
    <DashboardPage />
  </Layout>
);
