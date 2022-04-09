/* eslint-disable no-console, no-alert */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_CLIENT_ID;

function Logout() {
  const navigate = useNavigate();
  const onSuccess = () => {
    console.log('Logged out successfully');
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
