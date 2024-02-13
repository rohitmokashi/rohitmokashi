import { useState } from "react";

const fontColor400_hover = `hover:text-purple-400`;
const fontColor500 = `text-purple-500`;

const bgColor500 = `bg-purple-500`;
const bgColor600_hover = `hover:bg-purple-600`;

function NavBar() {

    const [activeLink, setActiveLink] = useState('home');

    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className={`${fontColor500} md:order-1`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </div>
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">
                        <li className={"md:px-4 md:py-2 " + (activeLink == 'home' ? fontColor500 : fontColor400_hover)}><a href="#" onClick={() => setActiveLink('home')}>Home</a></li>
                        <li className={"md:px-4 md:py-2 " + (activeLink == 'skills' ? fontColor500 : fontColor400_hover)}><a href="#" onClick={() => setActiveLink('skills')}>Skills</a></li>
                        <li className={"md:px-4 md:py-2 " + (activeLink == 'education' ? fontColor500 : fontColor400_hover)}><a href="#" onClick={() => setActiveLink('education')}>Education</a></li>
                        <li className={"md:px-4 md:py-2 " + (activeLink == 'projects' ? fontColor500 : fontColor400_hover)}><a href="#" onClick={() => setActiveLink('projects')}>Projects</a></li>
                    </ul>
                </div>
                <div className="order-2 md:order-3">
                    <button className={`px-4 py-2 ${bgColor500} ${bgColor600_hover} text-gray-50 rounded-xl flex items-center gap-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" >
                            <path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M14 17H8M16 13H8M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Resume</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;