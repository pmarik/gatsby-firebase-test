import React, { Fragment } from 'react';
import { compose } from 'recompose';

import Layout from '../components/layout';
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../components/Auth/Session';
import PasswordForgetForm from '../components/Auth/PasswordForget';
import PasswordChangeForm from '../components/Auth/PasswordChange';
import LoginManagement from '../components/Auth/LoginManagement';

const AccountPageBase = () => (
  <Fragment>
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <PasswordChangeForm />
          <LoginManagement authUser={authUser} />
        </div>
      )}
    </AuthUserContext.Consumer>
  </Fragment>
);


 // TODO decide permission based, or role based access. 
 /*
  In current form (authuser => !!authUser) if does broad auth check to see if user is not null
 */
const condition = authUser => !!authUser; 

const AccountPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(AccountPageBase);

export default () => (
  <Layout>
    <AccountPage />
  </Layout>
);
