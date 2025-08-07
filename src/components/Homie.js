// src/components/Homie.js

import React from 'react';
import '../App.css';

function Homie() {
  return (
    <div className="page-content">
      <div className="form-container" style={{ maxWidth: "900px", margin: "40px auto" }}>
        <h2 className="form-title" style={{ fontSize: "2rem" }}>About Prodapt Solutions</h2>
        <p style={{ fontSize: "1.15rem", color: "#34495e", textAlign: "center", marginBottom: "32px" }}>
          Prodapt is a leading provider of digital services, delivering transformative business solutions for the connectedness industry. 
          With deep industry knowledge and global delivery capabilities, Prodapt enables businesses to accelerate their digital journey.
        </p>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
          <div className="card" style={{
            background: "#f8f9fa",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(44,62,80,0.10)",
            width: "270px",
            padding: "18px",
            textAlign: "center"
          }}>
            <img src={require('../components/download.jpg')} alt="Prodapt Office" style={{ width: "100%", borderRadius: "10px", marginBottom: "12px" }} />
            <h3 style={{ color: "#2d3a4b", marginBottom: "8px" }}>Global Presence</h3>
            <p style={{ color: "#34495e", fontSize: "1rem" }}>
              Offices in North America, Europe, and Asia. Serving clients worldwide with innovative digital solutions.
            </p>
          </div>
          <div className="card" style={{
            background: "#f8f9fa",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(44,62,80,0.10)",
            width: "270px",
            padding: "18px",
            textAlign: "center"
          }}>
            <img src={require('../components/prodapt2.jpg')} alt="Prodapt Team" style={{ width: "100%", borderRadius: "10px", marginBottom: "12px" }} />
            <h3 style={{ color: "#2d3a4b", marginBottom: "8px" }}>Expert Team</h3>
            <p style={{ color: "#34495e", fontSize: "1rem" }}>
              A team of passionate professionals driving digital transformation and delivering value to clients.
            </p>
          </div>
          <div className="card" style={{
            background: "#f8f9fa",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(44,62,80,0.10)",
            width: "270px",
            padding: "18px",
            textAlign: "center"
          }}>
            <img src={require('../components/prdapt3.jpg')} alt="Prodapt Innovation" style={{ width: "100%", borderRadius: "10px", marginBottom: "12px" }} />
            <h3 style={{ color: "#2d3a4b", marginBottom: "8px" }}>Innovation</h3>
            <p style={{ color: "#34495e", fontSize: "1rem" }}>
              Leveraging cutting-edge technology to create solutions for the connectedness industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homie;
