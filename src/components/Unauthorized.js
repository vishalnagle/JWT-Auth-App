import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
     <h1>Unauthorized Page Accessed</h1>
     <Link to="/">Please Sign In</Link>
    </div>
  </div>
  )
}

export default Unauthorized;