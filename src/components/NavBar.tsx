import "./NavBar.css";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-bar-h1">Portfolio</h1>

      <ul className="nav-bar-ul">
        <li className="nav-bar-li">
          <BsFillMoonStarsFill />
        </li>
        <li className="nav-bar-li resume-li">
          <a
            href="../software_development_resume.pdf"
            target="_blank"
            type="application/pdf"
            rel="alternate"
            media="print"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
