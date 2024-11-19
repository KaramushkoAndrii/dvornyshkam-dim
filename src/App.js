
import { Suspense, useState } from 'react';

import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import SearchSection from './components/searchSection/SearchSection';
import AboutSection from './components/aboutSection/AboutSection';
import OurAnimals from './components/ourAnimals/OurAnimals';
import HelpSection from './components/helpSection/HelpSection';
import DonateSection from './components/donateSection/DonateSection';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

import './index.scss'



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isOpen = () => {
    setIsModalOpen(true);
  }

  const isClose = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
        <Header />
        <HeroSection />
        <SearchSection isOpen={isOpen}/>
        <AboutSection />
        <OurAnimals />
        <HelpSection />
        <DonateSection />
        <Footer />
        <Modal isOpen={isOpen} isClose={isClose} isModalOpen={isModalOpen}/>
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
