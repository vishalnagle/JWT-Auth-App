import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function UserHome({ userData }) {
  const navigate = useNavigate("/")

  const logOut = () => {
    window.localStorage.clear();
    navigate("/")
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <div style={{display:"flex",justifyContent:"center"}}>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
