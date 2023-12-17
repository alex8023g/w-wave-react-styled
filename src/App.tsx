import React, { lazy, Suspense } from 'react';
import './main.global.css';
import { Header } from './components/Header';
import { SectionHero } from './components/SectionHero';
import { SectionPodcast } from './components/SectionPodcast';
import { SectionBroadcast } from './components/SectionBroadcast';

interface x {
  s: string;
}

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionPodcast />
        <SectionBroadcast />
      </main>
    </>
  );
}

export default App;
