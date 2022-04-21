/* eslint-disable react/jsx-boolean-value, no-alert, no-console */

import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "./App.css";
// refresh token
import { refreshTokenSetup } from "./refreshToken";

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login() {
  const navigate = useNavigate();

  function verifyUser(user) {
    console.log("verifying.......");
    const postUrl = "/login";
    const body = {};
    body.email = user.email;
    body.image_url = user.imageUrl;
    body.name = user.name;

    console.log(user, body);
    fetch(postUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => data.msg === "success");
  }

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    verifyUser(res.profileObj);
    refreshTokenSetup(res);
    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("name", res.profileObj.name);
    sessionStorage.setItem("imageUrl", res.profileObj.imageUrl);
    sessionStorage.setItem("email", res.profileObj.email);

    navigate("/home");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert("Failed to login.");
  };

  return (
    <div className="signup-center">
      <div className="signup">
        <GoogleLogin
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
          style={{ marginTop: "100px" }}
          isSignedIn={true}
        />
      </div>
    </div>
  );
}

export default Login;
