//Importing express
import express from "express";
const catsRouter = express.Router();

//GET cats route & search cats by name

import { getCats, searchCatsByName } from "../models/models.js";

catsRouter.get("/", async function (req, res) {
  if (req.query.name !== undefined) {
    const result = await searchCatsByName(req.query.name);
    console.log(req.query.name)
    console.log(result)
    return res.json({ success: true, payload: result });
  }
    const result = await getCats();
    return res.json({
        success: true,
        payload: result,
    })
})

//Get Cats by Id 

import { getCatsById } from "../models/models.js";

catsRouter.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const cat = await getCatsById(id);
  res.json({ success: true, payload: cat });
});



export { catsRouter };