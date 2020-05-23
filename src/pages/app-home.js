import React from 'react';
import { compose } from 'recompose';

import Layout from '../components/layout';
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
// TODO messages is another document, 
//import Messages from '../components/Messages';

const HomePageBase = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>

    {/* <Messages /> */}
  </div>
);

 // TODO decide permission based, or role based access. 
 /*
  In current form (authuser => !!authUser) if does broad auth check to see if user is not null
 */
const condition = authUser => !!authUser;


const HomePage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePageBase);

export default () => (
  <Layout>
    <HomePage />
  </Layout>
);
