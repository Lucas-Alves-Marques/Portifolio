'use client';
import { FiDownload as DownloadIcon } from "react-icons/fi";
import { FaCode as FragmentIcon } from "react-icons/fa6";

export default function Header() {

    const curriculumDownLoad = () => {

        const link = document.createElement('a');

        link.href = '/Lucas Alves Curriculum.pdf';
        link.download = 'Lucas Alves.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };

    return (

        <div className='w-full flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6 md:px-12'>

            <div className='flex gap-2 sm:gap-3 items-center'>

                <FragmentIcon className='text-[#27C9CC] text-3xl sm:text-[2.5rem]' />
                <h1 className='text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide'>Lucas Alves</h1>

            </div>
            <div
                onClick={ curriculumDownLoad }
                className='flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border rounded-xl border-[#27C9CC]
                text-[#27C9CC] hover:scale-105 transition-all duration-500 cursor-pointer
                hover:shadow-[0_0_5px_#22d3ee,0_0_15px_#22d3ee,0_0_30px_#22d3ee]'
            >

                <DownloadIcon className='text-lg sm:text-2xl' />
                <p className='text-sm sm:text-base font-medium whitespace-nowrap'>Baixar CV</p>

            </div>

        </div>

    );

};