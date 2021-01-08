import React from 'react';

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="container">
        <div className="text-container">
          <div className="name">I'm John Doe</div>
          <div className="description">
            Freelance web &amp; mobile developer
          </div>
          <button className="btn btn-hire">Contact me</button>
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
        </div>
        <div className="image-container"></div>
      </div>
    </section>
  );
}
