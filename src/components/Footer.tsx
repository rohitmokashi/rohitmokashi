

function Footer() {

    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rohit Mokashi</span>
                    <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://github.com/rohitmokashi" className="hover:underline me-4 md:me-6">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mokashirohit/" className="hover:underline me-4 md:me-6">LinkedIn</a>
                        </li>
                        <li>
                            <a href="mailto:rohitvm1009@gmail.com" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>



    )
}

export default Footer;