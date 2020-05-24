import React, { Fragment } from 'react';

import Layout from '../components/layout';
import SignInForm from '../components/Auth/SignIn';
// import SignInForm, {
//   SignInGoogle,
//   SignInFacebook,
//   SignInTwitter,
// } from '../components/SignIn';
import { SignUpLink } from '../components/Auth/SignUp';
import { PasswordForgetLink } from '../components/Auth/PasswordForget';

const SignInPage = () => (
  <Fragment>
    <h1>SignIn</h1>
    <SignInForm />
    {/* <SignInGoogle />
    <SignInFacebook />
    <SignInTwitter /> */}
    <PasswordForgetLink />
    <SignUpLink />
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
