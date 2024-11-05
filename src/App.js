
import { Suspense } from 'react';

import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';

import './index.scss'



function App() {
  return (
    <div className="App">
        <Header />
        <HeroSection />
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
