import { BaseURL } from "@/config/baseURL";
import Conteiner from "@/layout/conteiner";
import { Projects } from "@/types/types";
import { useEffect, useState } from "react";

export default function ProjectsPage() {

    const [projects, setProjects] = useState<Projects[]>([]);

    useEffect(() => {

        fetch(`${BaseURL}/projects`, {

            method: 'GET',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',

            }

        })
            .then(resp => {

                if (!resp.ok) throw new Error("Não foi possivel completar a requisição");

                return resp.json();

            })
            .then(data => {

                setProjects(data);

            })
            .catch(err => {

                console.log(err);

            });

    }, []);

    return (

        <div className='pt-10 sm:pt-16 md:pt-20'>

            <Conteiner
                title={ 'Projetos' }
                description={`Estes são alguns dos projetos que desenvolvi ao longo da minha trajetória, 
                com foco no aprimoramento das minhas habilidades.` }
                projects={ projects }
            />

        </div>

    );

};