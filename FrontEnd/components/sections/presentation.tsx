import Image from "next/image";
import { RiNextjsFill as NextIcon } from "react-icons/ri";
import { BsTypescript as TSIcon } from "react-icons/bs";
import { FaNodeJs as NodeIcon } from "react-icons/fa";
import { PiFileSql as SQLIcon } from "react-icons/pi";
import minha_ft from '@/images/minha_imagem.jpg';

export default function Presentation() {

    return (

        <div className='w-full flex flex-col gap-10 sm:gap-15 items-center justify-center pt-8 sm:pt-16 md:pt-20 px-4 sm:px-8'>

            <div className='w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 justify-center text-center md:text-left max-w-6xl'>

                <div className='flex flex-col gap-2 sm:gap-4 items-center md:items-start'>

                    <p className='text-2xl sm:text-3xl md:text-4xl text-[#27C9CC]'>Olá, eu sou</p>
                    <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight'>Lucas Alves</h1>
                    <p className='text-2xl sm:text-3xl md:text-4xl text-[#27C9CC]'>Desenvolvedor de Software Jr.</p>
                    <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-full md:max-w-140'>Criando aplicações web completas, que tornam o dia a dia dos usuários mais simples e eficiente.</p>

                </div>
                <Image
                    loading="eager"
                    alt='Homem negro, na faixa dos 20 anos, com oculos redondos e sorrindo.'
                    src={ minha_ft }
                    className='rounded-full h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 shrink-0 object-cover shadow-[0_0_5px_#22d3ee,0_0_15px_#22d3ee,0_0_30px_#22d3ee]'
                />

            </div>
            <div className='flex flex-wrap justify-center w-full items-center gap-6 sm:gap-10 md:gap-15 py-4'>

                <NextIcon className='text-white text-4xl sm:text-5xl md:text-6xl [-webkit-text-stroke:1px_#00ffff]' />
                <TSIcon className='text-blue-700 text-4xl sm:text-5xl' />
                <NodeIcon className='text-[#00ff1e] text-4xl sm:text-5xl' />
                <SQLIcon className='text-blue-600 text-4xl sm:text-5xl' />

            </div>

        </div>

    );

};