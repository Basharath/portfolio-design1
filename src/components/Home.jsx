import React from 'react';
import Intro from './Intro';
import Services from './Services';
import LatestWorks from './LatestWorks';
import Skills from './Skills';
import LatestArticles from './LatestArticles';
import Footer from './Footer';

export default function Home() {
  return (
    <main>
      <Intro />
      <Services />
      <LatestWorks />
      <Skills />
      <LatestArticles />
    </main>
  );
}
