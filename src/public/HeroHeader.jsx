import React from 'react';
import "./NavBar.scss";

function HeroHeader() {
  return (
    <div className='hero-header-div'>
        <div className="info-div">
            <span>hello,</span>
            <h1>I'm Rohit Mokashi</h1>
            <h2>a Full Stack Developer</h2>

            <div className="header-buttons">
                <button className='resume-button'>Resume</button>
                <button className='github-button'>GitHub</button>
            </div>
        </div>

        <div className="photo-div">

        </div>
    </div>
  )
}

export default HeroHeader;