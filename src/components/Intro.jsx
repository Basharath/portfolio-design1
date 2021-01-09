import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="container">
        <div className="text-container">
          <div className="name">I'm John Doe</div>
          <div className="description">
            Freelance web &amp; mobile developer
          </div>
          <Link to="/contact" className="btn btn-contact">
            Contact me
          </Link>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://stackoverflow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="image-container"></div>
      </div>
    </section>
  );
}
