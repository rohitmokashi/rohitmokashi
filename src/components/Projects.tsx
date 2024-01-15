import './Projects.css';

function Projects() {

    return (
        <div className='projects-container'>
            <h2>Projects</h2>
            <div className='projects-div'>
                <div className='project-div'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/00/Pi-hole_Logo.png'/>
                    <h3>PiHole</h3>
                    <p>PiHole description, sinkhole Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt temporibus nulla. Veniam, magni voluptatibus.</p>
                    <h4>Tools used</h4>
                    <p>AWS EC2</p>
                    <p>VPC</p>
                </div>
                
                <div className='project-div'>
                    <img src='https://asset.brandfetch.io/idGBqJSmMa/idNog5T5UD.svg'/>
                    <h3>Wazuh Server</h3>
                    <p>PiHole description, sinkhole Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt temporibus nulla. Veniam, magni voluptatibus.</p>
                    <h4>Tools used</h4>
                    <p>AWS EC2</p>
                    <p>VPC</p>
                </div>

                <div className='project-div'>
                    <img src='https://ethereum-org-fork.netlify.app/assets/svgs/eth-diamond-black.svg'/>
                    <h3>Blockchain based Supplychain</h3>
                    <p>PiHole description, sinkhole Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt temporibus nulla. Veniam, magni voluptatibus.</p>
                    <h4>Tools used</h4>
                    <p>Solidity</p>
                    <p>Hardhat</p>
                    <p>React JS</p>
                </div>

            </div>
        </div>
    )
}

export default Projects;