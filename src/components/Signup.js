import React from 'react';
import '../App.css';

function Signup() {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form>
        <label className="form-label">Name:</label>
        <input type="text" className="form-input" placeholder="Name" />
        <label className="form-label">Email:</label>
        <input type="email" className="form-input" placeholder="Email" />
        <label className="form-label">Password:</label>
        <input type="password" className="form-input" placeholder="Password" />
        <button className="form-btn" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;