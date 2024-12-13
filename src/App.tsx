import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ProfileHeader />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;