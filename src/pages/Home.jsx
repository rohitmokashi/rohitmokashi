import React from 'react';
import Skills from '../public/Skills';
import NavBar from '../public/NavBar';
import "./Home.scss";
import HeroHeader from '../public/HeroHeader';

function Home() {
  return (
    <div className='home-div'>
        {/* <Skills /> */}
        <NavBar />
        <HeroHeader />
    </div>
  )
}

export default Home;