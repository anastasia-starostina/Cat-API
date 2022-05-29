import { query } from '../index.js';

const sqlString = 'CREATE TABLE IF NOT EXISTS cats (id INT GENERATED ALWAYS AS IDENTITY, name TEXT, human TEXT, hobby TEXT);';

async function createCatsTable() {
    const res = await query(sqlString);
    console.log('create cats table');
}

createCatsTable();