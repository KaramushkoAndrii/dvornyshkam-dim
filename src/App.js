
import { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AnimalList from './data/animalList';
import AboutUsList from './data/aboutUsList';
import AdviseAccordionData from './data/adviseAccordionData';
import contactPageData from './data/contactPageData';
import HelpPageData from './data/helpPageData';
import { ContactsSocial } from './data/contactsList';
import CustomCursor from './components/customCursor/CustomCursor';

import Layout from './components/layout/Layout';
import Modal from './components/modal/Modal';
import HomePage from './pages/HomePage/HomePage';
import AnimalsPage from './pages/AnimalsPage/AnimalsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import DogPage from './pages/DogPage/DogPage';
import CatPage from './pages/CatPage/CatPage';
import AdvisePage from './pages/AdvisePage/AdvisePage';
import HelpPage from './pages/HelpPage/HelpPage';
import ContactPage from './pages/ContactPage/ContactPage';

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
        <CustomCursor />
        <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage isOpen={isOpen}/>} />
                <Route path='about' element={<AboutUsPage title={'navigation.about_us'} dataList={AboutUsList}/>} />
                <Route path='animals' element={<AnimalsPage animalList={AnimalList}/>} />
                    <Route path='animals/dogs'element={<DogPage isOpen={isOpen}/>} />
                    <Route path='animals/cats' element={<CatPage isOpen={isOpen}/>} />
                <Route path='advise' element={<AdvisePage title={'advise-page.title'} 
                                                          isOpen={isOpen} 
                                                          data={AdviseAccordionData}
                                                          content={'advise-page.content'}
                                                          btnText={'buttons.call'}/>}/>
                <Route path='help' element={<HelpPage data={HelpPageData} isOpen={isOpen}/>} />
                <Route path='contacts' element={<ContactPage data={contactPageData}
                                                             social={ContactsSocial}
                                                             isOpen={isOpen}/>}/>
              </Route>
          </Routes>
        </Router>
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
