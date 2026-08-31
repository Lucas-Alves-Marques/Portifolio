export interface Projects{

    id: number;
    name: string;
    description: string;
    tags: string[];
    type?: string;
    link_repos: string;
    link_img: string;

};

export interface ConteinerParams{

    title: string;
    description: string;
    projects: Projects[];

};

export interface CardProjectParams{

    project: Projects,
    duration: number

};