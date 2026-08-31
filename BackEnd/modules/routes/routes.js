import { Router } from "express";
import GetProjects from "../controllers/controllers.js";

export const router = Router();

router.get("/dataBase/:type", async (req, res) => {
  try {
    const { type } = req.params;

    const responseDB = await GetProjects(type);

    res.status(200).json(responseDB);
  } catch (err) {
    console.log(err);

    res.status(500).json({ Message: "Não foi possivel completar a requisição" });
  }
});
