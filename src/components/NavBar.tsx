import './NavBar.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function NavBar () {
    return (
        <nav className='nav-bar'>
            <h1 className='nav-bar-h1'>Portfolio</h1>

            <ul className='nav-bar-ul'>
                <li className='nav-bar-li'><BsFillMoonStarsFill /></li>
                <li className='nav-bar-li resume-li'><a href="#">Resume</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;