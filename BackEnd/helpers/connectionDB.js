import knex from "knex";
import 'dotenv/config';

let db;

const conexao = () => {

  return knex({

  client: 'mysql2',
  connection: {
    host: process.env.HOST_KNEX,
    port: process.env.HOST_KNEX,
    user: process.env.DBUSER_KNEX,
    password: process.env.PASSWORD_KNEX,
    database: process.env.DATABASE_KNEX,
  },

  })

};

db = conexao();

export default db;