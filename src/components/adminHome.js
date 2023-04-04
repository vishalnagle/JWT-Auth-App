import React, { Component, useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

export default function AdminHome({ userData }) {
  const navigate = useNavigate();
  const location = useLocation();
  let adminData = location?.state?.data;
  console.log("ad",adminData)

  console.log("location",location)

  // console.log("userDaata",userData)

  //logout
  const logOut = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <div className="adminHomeDiv" style={{ width: "auto" }}>
        <h3>Welcom Admin</h3>
        Name<h1>{adminData?.fname}</h1>
        Email <h1>{adminData?.email}</h1>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
