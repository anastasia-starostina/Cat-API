--------PLAN----------

Start with 6 - 11, create, populate, host and test the cats table on Heroku to add visibility when testing route handlers. 

1. Add GET request handlers to cat API
 - Base path is /api/cats ✅
 - Create router folder ✅
 - import express ✅
 - name a router ✅
 - export router into app.js ✅
2. Add Get by Id request Handler ✅
 - Use params ✅
3. Search cats by by name ✅
 - use query '?='✅
4. Create a function to read all cats ✅
- in models folder ✅
5. Create a function to read cats by id ✅
- models folder ✅
6. Install postgres (npm i pg) and import it into db/index.js ✅
 - Import and set up Pool with envionment variables 
   - Create a new database on Heroku to host cats database ✅
   - Type in new Heroku credentials into .env ✅
 - set up ssl ✅
 - export query function returning pool.query ✅
7. Host cat data base on Heroku ✅
8. import query function into createTable & populateTable ✅
9. Create a table with a SQL statement in /scripts/createTable.js ✅
10. Make an async function in createTable ✅
  - console log 'created table' to get immediate feedback ✅
11. Call the function ✅
12. Populate the table in /scripts/populateTable.js
  - import cats data array ✅
  - create an async  function with a for loop and sql query ✅
  - console log it for an immediate feedback ✅
13. Call populateTable function ✅
14. Configure create and populate table scripts in package.json
 - install dotenv dependancy  ✅

