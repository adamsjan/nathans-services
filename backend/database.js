// database.js
const Pool = require('pg').Pool;
const multer = require('multer');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false  // Important for Heroku
    }
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connection successful, current time:', res.rows[0]);
});

const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// A simple query that creates a table in our database
// Note that the "SERIAL"  pseudo-type that is used after the "id" is used to create a sequence object,
// and set the next value generated by the sequence as the default value for the column
const createPostTblQuery = `
    CREATE TABLE IF NOT EXISTS "datatable" (
	"id" SERIAL PRIMARY KEY,         
	"key" VARCHAR(200),
	"value" VARCHAR(2000) NOT NULL  
    );`;

// A function to execute the previous query   
execute(createPostTblQuery).then(result => {
    if (result) {
        console.log('Created the "datatable" table if it did not exist already.');
    }
});

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createUserTblQuery).then(result => {
    if (result) {
        console.log('Created the "users" table if it did not exist already.');
    }
});

/* Create table to upload images */
const createImageTblQuery = `
CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    url_small VARCHAR(255),
    url_medium VARCHAR(255),
    url_large VARCHAR(255)
);`;

execute(createImageTblQuery).then(result => {
    if (result) {
        console.log('Created the "images" table if it did not exist already.');
    }
});

module.exports = pool;
