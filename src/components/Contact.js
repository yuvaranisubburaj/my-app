import React from 'react';
import '../App.css';

function Contact() {
  return (
    <div className="form-container">
      <h2 className="form-title">Contact Us</h2>
      <form>
        <label className="form-label">Name:</label>
        <input type="text" className="form-input" placeholder="Your name" />
        <label className="form-label">Email:</label>
        <input type="email" className="form-input" placeholder="Your email" />
        <label className="form-label">Message:</label>
        <textarea className="form-textarea" placeholder="Your message" rows={4}></textarea>
        <button type="submit" className="form-btn">Send</button>
      </form>
    </div>
  );
}

export default Contact;