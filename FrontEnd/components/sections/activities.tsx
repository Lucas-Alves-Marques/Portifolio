import { BaseURL } from "@/config/baseURL";
import Conteiner from "@/layout/conteiner";
import { Projects } from "@/types/types";
import { useEffect, useState } from "react";

export default function ActivitiesPage() {

    const [activities, setActivities] = useState<Projects[]>([]);

    useEffect(() => {

        fetch(`${BaseURL}/activities`, {

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

                setActivities(data);

            })
            .catch(err => {

                console.log(err);

            });

    }, []);

    return (

        <div className='pt-10 sm:pt-16 md:pt-20'>

            <Conteiner
                title={ 'Atividades' }
                description={`Durante minha formação, desenvolvi projetos com diferentes 
                linguagens e tecnologias, buscando ampliar meus conhecimentos e adquirir 
                experiência além da minha área de domínio.` }
                projects={ activities }
            />

        </div>

    );

};