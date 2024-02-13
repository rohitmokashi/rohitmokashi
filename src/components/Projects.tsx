import thalaforareason from "../assets/thalaforareason_snapshot.png";
import portfolio from "../assets/portfolio_snapshot.png";
import blockchianbasedsupplychain from "../assets/blockchainBasedSupplyChian_snapshot.png";

const ProjectsCard = (data: { url: string, img: string, github: string, title: string, text: string, techStack: Array<string> }) => {
    return (
        <article className='bg-slate-300 rounded-lg shadow-md hover:shadow-xl duration-300'>
            <img
                src={data.img}
                alt={data.title}
                className='border-b-2 border-black w-full object-cover rounded-t-lg h-64'
            />
            <div className='    capitalize p-8'>
                <h2 className=' tracking-wide font-medium teamber-300 text-4xl'>{data.title}</h2>
                <p className='mt-4 leading-loose'>{data.text}</p>
                <div>
                    {data.techStack.map((technology) => {
                        return <span className="bg-blue-100 text-blue-800 text-s font-large me-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-blue-400 border border-blue-400">{technology}</span>
                    })}
                </div>
                <div className='mt-4 flex gap-x-4'>
                    <a href={data.url}>
                        <svg className='h-8 w-8 text-slate-500 hover:text-black duration-300' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 9H2M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href={data.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" className='h-8 w-8 text-slate-500 hover:text-black duration-300' viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
};

function Projects() {
    const projects = [
        {
            id: 'pro1',
            img: portfolio,
            url: 'https://rohitmokashi.github.io/rohitmokashi/',
            github: 'https://github.com/rohitmokashi/rohitmokashi',
            title: 'Portfolio Website',
            text: 'Dynamic portfolio website showcasing my skills and projects.',
            techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Github'],
        },
        {
            id: 'pro2',
            img: blockchianbasedsupplychain,
            url: 'https://github.com/rohitmokashi/blockchain-based-supply-chain/',
            github: 'https://github.com/rohitmokashi/blockchain-based-supply-chain',
            title: 'Blockchain Based Supplychain management system',
            text: '',
            techStack: ['React', 'Hardhat', 'Bootstrap', 'Javascript',  'Solidity'],
        },
        {
            id: 'pro3',
            img: thalaforareason,
            url: 'https://rohitmokashi.github.io/thalaforareason/',
            github: 'https://github.com/rohitmokashi/thalaforareason',
            title: 'Thala for a Reason',
            text: 'Following the trend with an interactive project for checking for Thala',
            techStack: ['React', 'TypeScript', 'CSS'],
        },
        // {
        //     id: 'pro4',
        //     img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        //     url: 'https://to-do-now-react-project.netlify.app/',
        //     github: 'https://github.com/AhmedWithJSDevelopment',
        //     title: 'first project',
        //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
        // },
        // {
        //     id: 'pro5',
        //     img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
        //     url: 'https://unsplash-image2.netlify.app/',
        //     github: 'https://github.com/AhmedWithJSDevelopment',
        //     title: 'second project',
        //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
        // },
        // {
        //     id: 'pro6',
        //     img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
        //     url: 'https://temp-contentful-app.netlify.app/',
        //     github: 'https://github.com/AhmedWithJSDevelopment',
        //     title: 'third project',
        //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
        // },
    ];


    return (
        <section className='py-20 align-element w-4/5 m-auto' id='projects'>
            <h2 className='text-5xl font-medium tracking-wider capitalize text-white'>Projects</h2>
            <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {projects.map((project) => {
                    return <ProjectsCard key={project.id} {...project} />;
                })}
            </div>
        </section>
    );
};



export default Projects;