import React from 'react';

import eventLogger from '../images/event-logger.png';
import techBreeze from '../images/tech-breeze.png';
import calendar from '../images/calendar.png';
import typingGame from '../images/typing-game.png';
import analogClock from '../images/analog-clock.png';
import fireworks from '../images/fireworks.png';

const projects = [
  {
    image: typingGame,
    title: 'Typing Game',
    description:
      'Enim praesentium, dolorum, voluptatibus in quasi minus cupid itate aliquid pariatur laudantium  adipisci expedita!',
    demoUrl: 'https://easy-typing-game.netlify.app/',
    git: 'https://github.com/Basharath/typing-game',
  },
  {
    image: analogClock,
    title: 'Analog Clock',
    description:
      'Enim praesentium, dolorum, voluptatibus in quasi minus cupid itate aliquid pariatur laudantium  adipisci expedita!',
    demoUrl: 'https://simple-analog-clock.netlify.app/',
    git: 'https://github.com/Basharath/analog-clock',
  },
  {
    image: fireworks,
    title: 'Canvas Fireworks',
    description:
      'Enim praesentium, dolorum, voluptatibus in quasi minus cupid itate aliquid pariatur laudantium  adipisci expedita!',
    demoUrl: 'https://fireworks-canvas.netlify.app/',
    git: 'https://github.com/Basharath/fireworks',
  },
  {
    image: eventLogger,
    title: 'Event Logger',
    description:
      'Enim praesentium, dolorum, voluptatibus in quasi minus cupid itate aliquid pariatur laudantium  adipisci expedita!',
    demoUrl: 'https://event-logger.netlify.app/',
    git: 'https://github.com/Basharath/event-logger',
  },
  {
    image: techBreeze,
    title: 'Tech Breeze',
    description:
      'Enim praesentium, dolorum, voluptatibus in quasi minus cupid itate aliquid pariatur laudantium  adipisci expedita!',
    demoUrl: 'https://tech-breeze.netlify.app/',
    git: 'https://github.com/Basharath/tech-breeze',
  },
  {
    image: calendar,
    title: 'Calendar',
    description:
      'Enim praesentium, dolorum, voluptatibus in quasi minus cupid itate aliquid pariatur laudantium  adipisci expedita!',
    demoUrl: 'https://simple-calendar-app.netlify.app/',
    git: 'https://github.com/Basharath/Calendar',
  },
];

export default function Projects() {
  const Card = ({ image, title, description, demoUrl, git }) => (
    <div className="card">
      <a href={demoUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title.split(' ').join('-')} />
      </a>
      <div className="card_body">
        <div className="title">{title}</div>
        <p className="description">{description}</p>
        <div className="card_footer">
          <div className="tag">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Demo
            </a>
          </div>
          <div className="tag">
            <a href={git} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <section className="projects">
      <div className="heading">Projects</div>
      <div className="container">
        {projects.map((p, idx) => (
          <Card
            image={p.image}
            title={p.title}
            description={p.description}
            demoUrl={p.demoUrl}
            git={p.git}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}
