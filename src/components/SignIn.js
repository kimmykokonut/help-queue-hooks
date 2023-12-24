import React, { useState } from "react";
import { auth } from './../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  function doSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`);
        navigate('/');
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing in ${error.message}.`);
      });
  }
  function doSignIn(e) {
    e.preventDefault();
    const email = e.target.signinEmail.value;
    const password = e.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
        setIsSignedIn(true);
        navigate('/');
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}`)
      });
  }
  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess("You have successfully signed out");
      }).catch(function (error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`)
      });
  }
  return (
    <React.Fragment>
      <h1>Sign IN</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
      <hr />
      <h1>Sign OUT</h1>
      {signOutSuccess}
      <button onClick={doSignOut}>Sign out</button>

      <h3>Don't have an account?</h3>
      <button onClick={() => setShowSignUp(!showSignUp)}>Create an account</button>
      {showSignUp && (
        <form onSubmit={doSignUp}>
          <h1>Sign UP</h1>
          {signUpSuccess}
          <input type='text' name='email' placeholder='email' />
          <input type='password' name='password' placeholder="Password" />
          <button type='submit'>Sign up</button>
        </form>
      )}
    </React.Fragment>
  );
}
export default SignIn;