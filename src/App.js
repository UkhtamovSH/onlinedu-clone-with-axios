import React from 'react';
import './App.css';
import Certificate from './components/Certificate';
import Comfort from './components/Comfort';
import Courses from './components/Courses';
import Footer from './components/Footer';
import OurTeachers from './components/OurTeachers';
import Vebinar from './components/Vebinar';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PracticeCarousel from './components/PracticeCarousel';
import ExpertsView from './components/ExpertsView';

function App() {
  return (
    <div className="onlineduApp">
      <Navbar />
      <Header />
      <PracticeCarousel />
      <ExpertsView />
      <Comfort />
      <Certificate />
      <Courses />
      <Vebinar />
      <OurTeachers />
      <Footer />
    </div>
  );
}

export default App;
