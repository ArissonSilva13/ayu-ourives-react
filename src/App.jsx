import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseInfo from './components/CourseInfo';
import ArtistInfo from './components/ArtistInfo';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Agora os componentes estão livres, sem a div container */}
        <CourseInfo />
        <ArtistInfo />
      </main>
      <Footer />
    </>
  );
}

export default App;