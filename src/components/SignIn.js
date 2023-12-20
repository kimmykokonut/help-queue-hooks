import React, { useState } from "react";
import { auth } from './../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);

  function doSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`);
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
    })
    .catch((error) => {
      setSignInSuccess(`There was an error signing in: ${error.message}`)
    });
  }

  return (
    <React.Fragment>
      <h1>Sign UP</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input type='text' name='email' placeholder='email' />
        <input type='password' name='password' placeholder="Password" />
        <button type='submit'>Sign up</button>
      </form>
      <hr />
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
    </React.Fragment>
  );
}
export default SignIn;