
import { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Modal from './components/modal/Modal';
import HomePage from './pages/HomePage/HomePage';
import AnimalsPage from './pages/AnimalsPage/AnimalsPage';
import DogPage from './pages/DogPage/DogPage';
import CatPage from './pages/CatPage/CatPage';

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
        <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage isOpen={isOpen}/>} />
                <Route path='animals' element={<AnimalsPage />} />
                <Route path='animals/dogs'element={<DogPage isOpen={isOpen}/>} />
                <Route path='animals/cats' element={<CatPage />} />
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
