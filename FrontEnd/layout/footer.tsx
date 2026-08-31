import { FaSquareGithub as GitHubIcon } from "react-icons/fa6";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa6";
import { MdEmail as EmailIcon } from "react-icons/md";

export default function Footer() {

    return (

        <div className='w-full py-8 px-4 flex items-center justify-center bg-black border-t border-gray-900'>

            <div className='flex flex-col gap-3 sm:gap-4 w-full items-center'>

                <h1 className='text-2xl sm:text-3xl text-[#27C9CC] uppercase font-bold'>{ 'Contatos' }</h1>
                <div className='flex gap-6 sm:gap-8 text-white text-3xl sm:text-4xl'>

                    <a href='https://github.com/Lucas-Alves-Marques' target="_blank" rel="noopener noreferrer">

                        <GitHubIcon className='cursor-pointer hover:scale-110 transition-all duration-300' />

                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=lucas.marquesalv24@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <EmailIcon className='cursor-pointer hover:scale-110 transition-all duration-300' />

                    </a>
                    <a href='https://www.linkedin.com/in/lucas-alves-752055214' target="_blank" rel="noopener noreferrer">

                        <LinkedinIcon className='cursor-pointer hover:scale-110 transition-all duration-300' />

                    </a>

                </div>

            </div>

        </div>

    );

};