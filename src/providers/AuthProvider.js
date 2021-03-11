import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authmethods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const initState = { email: '', password: '' };
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);

  const handleGoogleSignup = () => {
    authMethods.googleSignup(setToken, setGoogleUser, setErrors);
  };

  const handleSignup = () => {
    // middle man between firebase and signup
    console.log('handleSignup');
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };
  const handleSignin = () => {
    console.log('handleSignin!!!!');
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleGoogleSignup,
        handleSignin,
        handleSignout,
        setInputs,
        inputs,
        googleUser,
        token,
        errors,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
