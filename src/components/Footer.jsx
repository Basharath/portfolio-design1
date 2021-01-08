import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-stack-overflow"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} John Doe | All rights reserved.
      </div>
    </footer>
  );
}
