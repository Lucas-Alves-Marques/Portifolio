import db from "../../Helpers/ConnectionDB.js";

export default async function GetProjectsDB() {
  try {
    const projects = await db("projects");

    return projects;
  } catch (err) {
    throw err;
  }
}
