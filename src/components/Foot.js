import React from 'react';
import '../App.css';

function Foot() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Prodapt Solutions. All rights reserved.
    </footer>
  );
}

export default Foot;