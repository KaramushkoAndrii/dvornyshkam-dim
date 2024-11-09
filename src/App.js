
import { Suspense } from 'react';

import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import SearchSection from './components/searchSection/SearchSection';

import './index.scss'



function App() {
  return (
    <div className="App">
        <Header />
        <HeroSection />
        <SearchSection />
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
