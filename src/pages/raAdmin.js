import React from 'react';
import { compose } from 'recompose';
import Layout from '../components/layout';
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Auth/Session';

const ReactAdminPageBase = () => (
  <div>
    <h1>React Admin Page</h1>
  </div>
);

 // TODO decide permission based, or role based access. 
 /*
  In current form (authuser => !!authUser) if does broad auth check to see if user is not null
 */
const condition = authUser => !!authUser;


const ReactAdminPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(ReactAdminPageBase);

export default () => (
    <Layout>
        <ReactAdminPage />
    </Layout>
);
