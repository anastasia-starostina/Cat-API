import { query } from '../index.js';
import { cats } from '../../app.js';

async function populateCatsTable () {
    for(let i = 0; i < cats.length; i++) {
        const res = await query (`INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3) RETURNING *;`, [cats[i].name, cats[i].human, cats[i].hobby]);
        console.log(res.rows[0].name, 'added')
    }
}
populateCatsTable();
