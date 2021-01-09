import React from 'react';

import eventLogger from '../images/event-logger.png';
import techBreeze from '../images/tech-breeze.png';
import typingGame from '../images/typing-game.png';
import analogClock from '../images/analog-clock.png';

export default function RecentWorks() {
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
    <section className="recent_works">
      <div className="heading">Recent Works</div>
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
        <ImageCard
          title="Analog Clock"
          image={analogClock}
          tech="HTML, CSS, React"
        />
      </div>
    </section>
  );
}
