import { CardProjectParams } from "@/types/types";
import { useEffect, useState } from "react";
import { FaSquareGithub as GitHubIcon } from "react-icons/fa6";

export default function Card({ project, duration }: CardProjectParams) {

    const [animation, setAnimation] = useState(true);

    useEffect(() => {

        setTimeout(() => {

            setAnimation(false);

        }, 800);

    }, []);

    return (

        <div className={ `flex flex-col rounded-2xl border border-[#27C9CC] w-70 sm:w-[320px] md:w-95 shrink-0 snap-center 
            overflow-hidden bg-black shadow-lg animationCard ${animation ? "opacity-0" : " opacity-100"}` }
            style={{animationDelay:`0.${duration}s`}}>

            <div className='w-full h-44 sm:h-52 overflow-hidden relative bg-gray-900'>

                <img
                    src={ project.link_img }
                    alt={ project.name }
                    className='w-full h-full object-cover rounded-t-2xl'
                />

            </div>
            <div className='flex flex-col justify-between flex-1 p-4 sm:p-5 bg-black rounded-b-2xl gap-3'>

                <div>
                    <h1 className='text-xl sm:text-2xl text-[#27C9CC] uppercase font-bold mb-2'>{ project.name }</h1>
                    <p className='text-xs sm:text-sm text-white/80 leading-relaxed'>{ project.description }</p>
                </div>

                <div className='flex justify-between items-center mt-auto pt-3 border-t border-gray-800/60'>

                    <div className='flex flex-wrap gap-2 items-center justify-start'>

                        { project.tags.map((tag, index) => (

                            <span key={ index }
                                className='rounded-xl border border-[#27C9CC] px-2.5 py-0.5 text-xs text-[#27C9CC] font-medium'>

                                { tag }

                            </span>

                        )) }

                    </div>
                    <a href={ project.link_repos } target="_blank" rel="noopener noreferrer" className="ml-2 shrink-0">

                        <GitHubIcon className='cursor-pointer hover:scale-110
                         text-[#27C9CC] transition-all duration-300 text-2xl sm:text-3xl' />

                    </a>

                </div>

            </div>

        </div>

    );

}