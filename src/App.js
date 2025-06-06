import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Home />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;