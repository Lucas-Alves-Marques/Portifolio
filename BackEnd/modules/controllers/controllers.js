import GetProjectsDB from "../data/dataBase.js";

export default async function GetProjects(type) {
    
    try{

        const dataDB = await GetProjectsDB();

        if(type == 'projects'){

            const project = dataDB.filter(data => data.type === 'Project');

            return project;

        }

        else if(type == 'activities'){

            const activities = dataDB.filter(data => data.type === 'Activities');
            
            return activities;

        }

        else{

            throw new Error('Tipo não encontrado');

        }

    }catch(err){

        throw err;

    };

}