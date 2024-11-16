
import { Suspense } from 'react';

import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import SearchSection from './components/searchSection/SearchSection';
import AboutSection from './components/aboutSection/AboutSection';
import OurAnimals from './components/ourAnimals/OurAnimals';
import HelpSection from './components/helpSection/HelpSection';

import './index.scss'



function App() {
  return (
    <div className="App">
        <Header />
        <HeroSection />
        <SearchSection />
        <AboutSection />
        <OurAnimals />
        <HelpSection />
    </div>
  );
}

export default function wrapperedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
