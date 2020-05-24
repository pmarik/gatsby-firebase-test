import React from 'react';
import { compose } from 'recompose';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { Router } from '@reach/router';
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
import Projects from '../components/Projects/Projects';
// TODO messages is another document, 
//import Messages from '../components/Messages';

const DashboardPageBase = () => (
  <div>
    <h1>Dashboard Page</h1>
    <p>User dashboard</p>
    <Link to="/dashboard/project">view projects</Link>

    {/* <Messages /> */}
    <Router>
      <Projects path='/dashboard/project' />
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
