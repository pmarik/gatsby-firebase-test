import React from 'react';
import { compose } from 'recompose';
import Projects from '../components/projects/Projects';
import Layout from '../components/layout';
import Link from 'gatsby';
import { Router } from "@reach/router";
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
// TODO messages is another document, 
//import Messages from '../components/Messages';

const DashboardPageBase = () => (
  <div>
    <h1>Dashboard Page</h1>
    <p>User dashboard</p>
    <Link to="./projects">view projects</Link>

    <Router>
        <Projects path="/dashboard/projects" />
    </Router>

    {/* <Messages /> */}
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
