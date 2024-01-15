import './Heading.css';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import avatar from '../avatar.png';

function Heading() {
    return (
        <div className='heading-div'>
            <h2>Rohit Mokashi</h2>
            <h3>Full Stack Web Developer</h3>
            <p>
                Computer Enginerring B Tech Student interested in learning about new technologies like cybersecurity and Web3
            </p>
            <div className='social-links'>
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
            </div>

            <div className='avatar'>
                <img src={avatar} />
            </div>
        </div>
    )
}

export default Heading;