import React from 'react';
import '../App.css';

function Login() {
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form>
        <label className="form-label">Email:</label>
        <input type="email" className="form-input" placeholder="Email" />
        <label className="form-label">Password:</label>
        <input type="password" className="form-input" placeholder="Password" />
        <button className="form-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
