import React, { Component, useEffect, useState } from "react";
import AdminHome from "./adminHome";
import { useNavigate } from "react-router-dom";
import UserHome from "./userHome";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data upar setUserData", data.data);
        console.log(data, "userData");
        setUserData(data.data);
        if (data.data.userType == "Admin") {
          setAdmin(true);
          navigate("/admin",{state:{data:data.data}});
        } else if(data.data.userType == "User") {
          navigate("/user",{state:{data:data.data}});
        }
        console.log("userType", data?.data?.userType);
        localStorage.setItem("userType", JSON.stringify(data?.data?.userType));

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          navigate("/");
        }
      });
  }, []);

  return admin ? (
    <AdminHome userData={userData} />
  ) : (
    <UserHome userData={userData} />
  );
}
