create database portfolio;

use portfolio;

create table projects (

    id          int auto_increment primary key,
    name        varchar(200)                   null,
    description varchar(200)                   null,
    tags        json                           null,
    type        enum ('Project', 'Activities') null,
    link_repos  text                           null,
    link_img    text                           null
    
);