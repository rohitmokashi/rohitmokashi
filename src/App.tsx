import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Heading from './components/Heading';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading />
      <Projects />
    </div>
  );
}

export default App;
