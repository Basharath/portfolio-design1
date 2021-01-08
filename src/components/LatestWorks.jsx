import React from 'react';

import eventLogger from '../images/event-logger.png';
import techBreeze from '../images/tech-breeze.png';
import calender from '../images/calendar.png';
import typingGame from '../images/typing-game.png';

export default function LatestWorks() {
  const ImageCard = ({ title, image, tech }) => (
    <div className="image-container">
      <img src={image} alt="latest-works" />
      <div className="text">
        <div className="title">{title}</div>
        <div className="tech">{tech}</div>
      </div>
    </div>
  );
  return (
    <section className="latest_works">
      <div className="heading">Latest works</div>
      <div className="container">
        <ImageCard
          title="Tech Breeze"
          image={techBreeze}
          tech="HTML, CSS, React"
        />

        <ImageCard
          title="Event Logger"
          image={eventLogger}
          tech="HTML, CSS, React"
        />

        <ImageCard
          title="Typing game"
          image={typingGame}
          tech="HTML, CSS, React"
        />
        <ImageCard title="Calendar" image={calender} tech="HTML, CSS, React" />
      </div>
    </section>
  );
}
