import React, { useState } from 'react';

import Layout from '../components/layout';
import SignInForm from '../components/Auth/SignIn';
// import SignInForm, {
//   SignInGoogle,
//   SignInFacebook,
//   SignInTwitter,
// } from '../components/SignIn';
import { SignUpLink } from '../components/Auth/SignUp';
// import { PasswordForgetLink } from '../components/Auth/PasswordForget';
import PasswordForgetForm from '../components/Auth/PasswordForget';

const SignInPage = () => {

  const [toggle, setToggle] = useState(false);
 
  return (
  <>
    <h1>SignIn</h1>
    <SignInForm />
    <button onClick={() => setToggle(true)}>forget password?</button>
    {toggle && <PasswordForgetForm />}
    <SignUpLink />
  </>
)};

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
