
import express from "express";
import { query } from "../db/index.js"
import { cats } from "../app.js";

// Get Cats function 
export async function getCats() {
    const cats = await query(`SELECT * FROM cats;`);
    return cats.rows;
}

// Get Cats by Id Function 
export async function getCatsById(id) {
    const cats = await query(`SELECT * FROM cats WHERE id = ($1);`, [id]);
    return cats.rows;
}
  
//Search cats by name 
export async function searchCatsByName(searchTerm) {
    //add author's first and last name, create authors table
    const response = await query(`SELECT * FROM cats WHERE name ILIKE '%'||$1||'%';`,[searchTerm]);
  return response.rows;
  } 