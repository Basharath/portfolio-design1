import React from 'react';
import Intro from './Intro';
import Services from './Services';
import Skills from './Skills';
import LatestArticles from './LatestArticles';
import RecentWorks from './RecentWorks';

export default function Home() {
  return (
    <main>
      <Intro />
      <Services />
      <RecentWorks />
      <Skills />
      <LatestArticles />
    </main>
  );
}
