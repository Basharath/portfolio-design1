import React from 'react';

import post1 from '../images/post1.jpg';
import post2 from '../images/post2.jpg';
import post3 from '../images/post3.jpg';

export default function LatestArticles() {
  const Card = ({ image, title, excerpt, tag, date }) => (
    <div className="card">
      <img src={image} alt={title.split(' ').join('-')} />
      <div className="card_body">
        <div className="title">{title}</div>
        <p className="excerpt">{excerpt}</p>
        <div className="card_footer">
          <div className="tag">{tag}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  );
  return (
    <section className="latest_articles">
      <div className="heading">Latest Articles</div>
      <div className="container">
        <Card
          image={post1}
          title="Different design patterns"
          excerpt="Enim praesentium, dolorum, voluptatibus in quasi minus cupid itate aliquid pariatur laudantium  adipisci expedita!"
          tag="JavaScript"
          date="Dec 18th, 2020"
        />
        <Card
          image={post2}
          title="Social network designs"
          excerpt="Earum officiis, totam nesciunt, numquam ratione at aperiam voluptatum dolor eos commodi fuga esse delectus!"
          tag="React"
          date="Jan 2nd, 2021"
        />
        <Card
          image={post3}
          title="Creative coding tips"
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero rem quaerat debitis porro voluptatum."
          tag="Python"
          date="Jan 08th, 2021"
        />
      </div>
    </section>
  );
}
