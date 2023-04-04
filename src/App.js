import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import AdminHome from "./components/adminHome";
import ImageUpload from "./components/imageUpload.";
import Unauthorized from "./components/Unauthorized";
import ProtectedRoute from "./utils/ProtectedRoute";
import ProtectedRouteAdmin from "./utils/ProtectedRouteAdmin";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  let userType = window.localStorage.getItem("userType");
  let token = window.localStorage.getItem("token");
  // This tutorial is only helpful if we want to login using single role...If
  // you want to apply multiple role based authentication example..Admin,User,Writer etc
  // please follow the repo: https://github.com/King-AJr/reactrbac

  // Im not able to apply multiple protected role based authentication because this dummy api
  // is incomplete...

  // PLEASE FOLLOW ONLY IF YOU WANT APPLY AUTHENTICATION TO ONE ROLE ONLY....

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />

          <Route
            exact
            path="/user"
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/admin"
            element={
              <ProtectedRouteAdmin>
                <AdminHome />
              </ProtectedRouteAdmin>
            }
          />
          <Route path="*" element={<Unauthorized />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
