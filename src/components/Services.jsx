import React from 'react';

export default function Services() {
  const Card = ({ icon, title, description }) => (
    <div className="card">
      <div className="icon">
        <i className={'fas fa-' + icon}></i>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );

  return (
    <section className="services">
      <div className="heading">Services</div>
      <div className="container">
        <Card
          icon="code"
          title="Web development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita necessitatibus voluptates aut nam commodi, provident atque blanditiis sunt animi?"
        />
        <Card
          icon="mobile-alt"
          title="App development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita necessitatibus voluptates aut nam commodi, provident atque blanditiis sunt animi?"
        />
        <Card
          icon="robot"
          title="Automation"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita necessitatibus voluptates aut nam commodi, provident atque blanditiis sunt animi?"
        />
      </div>
    </section>
  );
}
