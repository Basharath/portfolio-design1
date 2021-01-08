import React from 'react';

export default function Skills() {
  const Progress = ({ title, percent }) => (
    <div className="progress-container">
      <div className="title" style={{ width: percent + '%' }}>
        <p>{title}</p> <p>{percent + '%'}</p>
      </div>
      <div className="bar-container">
        <div
          className="bar"
          data-percent={percent}
          style={{ width: percent + '%' }}
        ></div>
      </div>
    </div>
  );
  return (
    <section className="skills">
      <div className="heading">Skills</div>
      <div className="container">
        <div className="front-end">
          <p className="stack-title">Front End</p>
          <Progress title="HTML/CSS" percent="80" />
          <Progress title="JavaScript" percent="75" />
          <Progress title="React" percent="75" />
        </div>
        <div className="back-end">
          <p className="stack-title">Back End</p>
          <Progress title="Node" percent="60" />
          <Progress title="Python" percent="50" />
          <Progress title="PHP" percent="50" />
        </div>
      </div>
    </section>
  );
}
