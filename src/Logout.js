/* eslint-disable no-console, no-alert */
import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_CLIENT_ID;

function Logout() {
  const onSuccess = () => {
    console.log('Logged out successfully');
    sessionStorage.clear();
    window.location.reload();
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
