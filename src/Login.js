/* eslint-disable react/jsx-boolean-value, no-alert, no-console */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './refreshToken';

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login() {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name}.`);
    refreshTokenSetup(res);
    navigate('/home', { state: res.profileObj });
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert('Failed to login.');
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
