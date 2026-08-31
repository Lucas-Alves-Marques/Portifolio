'use client';
import Card from "@/components/cards/card";
import { ConteinerParams } from "@/types/types";
import { useEffect, useRef, useState } from "react";
import { MdNavigateNext as NextIcon } from "react-icons/md";
import imgLoading from '@/images/loading.png';
import Image from "next/image";

export default function Conteiner({ title, description, projects }: ConteinerParams) {

    const sectionRef = useRef(null);

    const projectContainer = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);

    const [canScrollLeft, setCanScrollLeft] = useState(false);

    const [canScrollRight, setCanScrollRight] = useState(false);

    function nextProject() {

        if (!projectContainer.current) return;

        const container = projectContainer.current;

        const card = container.firstElementChild as HTMLElement;

        if (!card) return;

        const styles = window.getComputedStyle(container);

        const gap = parseFloat(styles.columnGap);

        container.scrollBy({
            left: card.offsetWidth + gap,
            behavior: "smooth",
        });

    }

    function previousProject() {

        if (!projectContainer.current) return;

        const container = projectContainer.current;

        const card = container.firstElementChild as HTMLElement;

        if (!card) return;

        const styles = window.getComputedStyle(container);

        const gap = parseFloat(styles.columnGap);

        container.scrollBy({
            left: -(card.offsetWidth + gap),
            behavior: "smooth",
        });

    }

    function uptadeScrollButtons() {

        if (!projectContainer.current) return;

        const container = projectContainer.current;

        setCanScrollLeft(container.scrollLeft > 5);

        setCanScrollRight(
            Math.ceil(
                container.scrollLeft + container.clientWidth
            ) < container.scrollWidth - 3
        );

    }

    useEffect(() => {

        const container = projectContainer.current;

        if (!container) return;

        uptadeScrollButtons();

        container.addEventListener("scroll", uptadeScrollButtons);
        window.addEventListener("resize", uptadeScrollButtons);

        return () => {

            container.removeEventListener("scroll", uptadeScrollButtons);
            window.removeEventListener("resize", uptadeScrollButtons);

        };

    }, [projects, isVisible]);

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() };

            },
            {
                threshold: 0.3
            }
        )

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();

    }, []);

    return (

        <div ref={sectionRef} className='flex flex-col h-full px-2 sm:px-4 md:px-8 lg:px-12 w-full'>

            <h1 className='text-2xl sm:text-3xl md:text-4xl text-[#27C9CC] uppercase font-bold px-2 sm:px-4'>{title}</h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-full md:max-w-190 my-3 sm:my-5 px-2 sm:px-4'>{description}</p>

            {projects.length > 0 && isVisible ? (

                <div className='relative w-full px-10 sm:px-14 md:px-5'>

                    <div
                        ref={projectContainer}
                        className='flex items-stretch gap-5 sm:gap-6 md:gap-10 max-w-full
                        overflow-x-auto h-full scrollProjects py-2 snap-x snap-mandatory'
                    >

                        {projects.map((project, index) => {

                            return (

                                <Card
                                    key={project.id}
                                    project={project}
                                    duration={(index + 1) * 20}
                                />

                            )

                        })}

                    </div>
                    {canScrollLeft && (

                        <div className='absolute top-0 left-0 h-full flex items-center justify-start pointer-events-none z-10'>

                            <div className='h-full flex items-center justify-center bg-linear-to-r from-black via-black/80 to-transparent pr-2 pl-0'>

                                <button
                                    onClick={previousProject}
                                    aria-label="Projeto anterior"
                                    className={`p-2 sm:p-3 rounded-full border transition-all duration-300 pointer-events-auto
                                border-[#27C9CC] bg-black/90 text-[#27C9CC] shadow-[0_0_12px_rgba(39,201,204,0.4)] cursor-pointer 
                                hover:scale-110 active:scale-95`}
                                >

                                    <NextIcon className='text-2xl sm:text-3xl md:text-4xl rotate-180' />

                                </button>

                            </div>

                        </div>

                    )}
                    {canScrollRight && (

                        <div className='absolute top-0 right-0 h-full flex items-center justify-end pointer-events-none z-10'>

                            <div className='h-full flex items-center justify-center bg-linear-to-l from-black via-black/80 to-transparent pl-2 pr-0'>

                                <button
                                    onClick={nextProject}
                                    aria-label="Próximo projeto"
                                    className={`p-2 sm:p-3 rounded-full border transition-all duration-300 pointer-events-auto
                                border-[#27C9CC] bg-black/90 text-[#27C9CC] shadow-[0_0_12px_rgba(39,201,204,0.4)] cursor-pointer 
                                hover:scale-110 active:scale-95`}
                                >

                                    <NextIcon className='text-2xl sm:text-3xl md:text-4xl' />

                                </button>

                            </div>

                        </div>

                    )}

                </div>

            ) : (

                <div className='w-full flex items-center justify-center'>

                    <Image
                        src={imgLoading}
                        alt='Tela de Carregamento dos projetos'
                        className='h-60 w-104 animate-spin [animation-duration:2s]'
                    />

                </div>


            )}

        </div>

    );

};