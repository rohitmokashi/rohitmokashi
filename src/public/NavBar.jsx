import React from 'react';
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
        <h2>Portfolio</h2>

        <ul>
            <li>Home</li>
            <li onClick={() => console.log("kjs")}>Skills</li>
            <li className='active'>Projects</li>
            <li>Experiance</li>
        </ul>

        {/* <ul>
            <li>Email</li>
            <li>LinkedIN</li>
            <li>LeetCode</li>
        </ul> */}
    </nav>
  )
}

export default NavBar;