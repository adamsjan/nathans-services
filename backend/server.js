// server.js
require('dotenv').config(); // Load environment variables from .env file

const morgan = require('morgan');
const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 3000;

const app = express();

app.use(compression());

app.use(morgan('dev'));

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../nathanservice/dist')));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
    maxAge: 86400,
    preflightContinue: true
  }));

// We need to include "credentials: true" to allow cookies to be represented  
// Also "credentials: 'include'" need to be added in Fetch API in the Vue.js App

app.use(express.json());  // Parses incoming requests with JSON payloads and is based on body-parser.
app.use(cookieParser());  // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

const secret = "gdgdhdbcb770785rgdzqws"; // use a stronger secret
const maxAge = 60 * 60; //unlike cookies, the expiresIn in jwt token is calculated by seconds not milliseconds

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
        //jwt.sign(payload, secret, [options, callback]), and it returns the JWT as string
}

app.disable('x-powered-by');

app.use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=3600');
    res.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; frame-ancestors 'self'; img-src 'self' https://nathansimages.blob.core.windows.net;");
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
    next();
});

//``````````````
  // Code will go here

  // is used to check whether a user is authenticated
app.get('/auth/authenticate', async(req, res) => {
    console.log('Navigation authentication has been called.');
    const token = req.cookies.jwt; // assign the token named jwt to the token const
    console.log("token " + token);
    let authenticated = false; // a user is not authenticated until proven the opposite
    try {
        if (token) { //checks if the token exists
            //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    console.log('token is not verified');
                    //res.send({ "authenticated not verfied": authenticated }); // authenticated = false
                    res.status(403).send({ "authenticated verified": authenticated });
                    
                } else { // token exists and it is verified 
                    console.log('author is authenticated');
                    authenticated = true;
                    //res.send({ "authenticated verified": authenticated }); // authenticated = true
                    res.status(200).send({ "authenticated verified": authenticated });
                }
            })
        } else { //applies when the token does not exist
            console.log('author is not authenticated');
            res.status(403).send({ "authenticated": authenticated }); // authenticated = false
            
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
        
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });

        /* 
        To authenticate users, you will need to compare the password they provide with the one in the database. 
        bcrypt.compare() accepts the plain text password and the hash that you stored, along with a callback function. 
        That callback supplies an object containing any errors that occurred, and the overall result from the comparison. 
        If the password matches the hash, the result is true.

        bcrypt.compare method takes the first argument as a plain text and the second argument as a hash password. 
        If both are equal then it returns true else returns false.
        */

        //Checking if the password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        //const validPassword = (password == user.rows[0].password);
        console.log("validPassword:" + validPassword);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        console.log("Token", token);
        res.status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});


// signup a user
app.post('/auth/signup', async(req, res) => {
    try {
        console.log("a signup request has arrived");
        //console.log(req.body);
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
        const bcryptPassword = await bcrypt.hash(password, salt) // hash the password and the salt 
        const authUser = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
        //console.log(token);
        //res.cookie("isAuthorized", true, { maxAge: 1000 * 60, httpOnly: true });
        //res.cookie('jwt', token, { maxAge: 6000000, httpOnly: true });
        res.status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id })
            .send;
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});


//logout a user = deletes the jwt
app.get('/auth/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});

const sharp = require('sharp');
const { BlobServiceClient } = require('@azure/storage-blob');

const azureBlobService = async (file) => {
    const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient('images');

    // Define the sizes you want
    const sizes = {
        small: 300,
        medium: 600,
        large: 1200,
    };

    const urls = {};

    for (const size in sizes) {
        const buffer = await sharp(file.buffer)
            .resize(sizes[size])
            .toBuffer();

        const blockBlobClient = containerClient.getBlockBlobClient(`${size}-${file.originalname}`);
        await blockBlobClient.uploadData(buffer);
        urls[size] = blockBlobClient.url;
    }

    return urls;
};

module.exports = azureBlobService;


const storage = multer.memoryStorage(); // Use memory storage to pass file data directly to Azure
const imageUpload = multer({ storage: storage });

   app.get('/images', async(req, res) => {
    try {
        console.log("get images request has arrived");
        const result = await pool.query(
            "SELECT * FROM images"
        );
        const images = result.rows; // Get rows from the result

        if (images.length > 0) {
            const images = await listBlobs();
            res.json({ success: true, images });
        } else {
            res.status(404).send('No images found');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.get('/image/:id/:size', async (req, res) => {
    try {
        console.log("get a post with route parameter request has arrived");
        const { id, size } = req.params; // Get the id and size from the route parameters

        const result = await pool.query("SELECT * FROM images WHERE id = $1", [id]);

        if (result.rows.length > 0) {
            const image = result.rows[0];
            let imageUrl;
            switch (size) {
                case 'small':
                    imageUrl = image.url_small;
                    break;
                case 'medium':
                    imageUrl = image.url_medium;
                    break;
                case 'large':
                    imageUrl = image.url_large;
                    break;
                default:
                    return res.status(400).json({ success: false, message: "Invalid size parameter" });
            }
            console.log("Image url is:", imageUrl);
            res.json({ success: true, url: imageUrl });
        } else {
            res.status(404).json({ success: false, message: "Image not found" });
        }
    } catch (err) {
        console.error("Error getting image:", err.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Task 2
app.get('/api/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM datatable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Task 3
app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("get a post with route parameter  request has arrived");
        // The req.params property is an object containing properties mapped to the named route "parameters". 
        // For example, if you have the route /posts/:id, then the "id" property is available as req.params.id.
        const { id } = req.params; // assigning all route "parameters" to the id "object"
        const posts = await pool.query( // pool.query runs a single query on the database.
            //$1 is mapped to the first element of { id } (which is just the value of id). 
            "SELECT * FROM datatable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]); // we already know that the row array contains a single element, and here we are trying to access it
        // The res.json() function sends a JSON response. 
        // This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
    } catch (err) {
        console.error(err.message);
    }
}); 

// ... routes with no token checks above

// auth middleware
app.use(async (req, res, next) => {
	console.log('authentication middleware');
    const token = req.cookies.jwt; // assign the token named jwt to the token const
    console.log("TOKEN IS ", token)
    //console.log("token " + token);
    let authenticated = false; // a user is not authenticated until proven the opposite
	try {
        if (token) { //checks if the token exists
            //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    console.log('token is not verified');
                    res.status(400).send(err.message);
                    return;
                } else { // token exists and it is verified 
                    console.log('author is authenticated');
                    authenticated = true;
                    next();
                }
            })
        } else { //applies when the token does not exist
            console.log('Token does not exist!');
            res.status(401).json({ error: "User is not registered" }).send
            return;
        }
	} catch (err) {
		console.error(err.message);
		res.status(400).send(err.message);
	}

});

// routes/middlewares below are always checked for valid token

// Task 1
app.post('/api/posts', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO datatable(key, value) values (NOW()::date, $1)    RETURNING*", [post.body]
            // $1, $2, $3 are mapped to the first, second and third element of the passed array (post.title, post.body, post.urllink)
            // The RETURNING keyword in PostgreSQL allows returning a value from the insert or update statement.
            // using "*" after the RETURNING keyword in PostgreSQL, will return everything
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
}); 

// Task 4
app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE datatable SET (key, value) = ($2, $3) WHERE id = $1", [id, post.key, post.value]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});


// Image Upload Routes
app.post('/image', imageUpload.single('image'), async(req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        console.log("post image");

        const urls = await azureBlobService(req.file);

        console.log("urls", urls);

        const { rows } = await pool.query(
            "INSERT INTO images (url_small, url_medium, url_large) VALUES ($1, $2, $3) RETURNING *", 
            [urls.small, urls.medium, urls.large]
        );

        console.log(rows);

        if (rows.length > 0) {
            res.json({ success: true, image: rows[0] });
        } else {
            res.status(400).json({ success: false, message: "Failed to insert image" });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: 'Server error:', error: error.message });
    }
});

app.put('/image/:id', imageUpload.single('image'), async(req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const urls = await azureBlobService(req.file);
        const { rows } = await pool.query(
            "UPDATE images SET url_small = $1, url_medium = $2, url_large = $3 WHERE id = $4 RETURNING id",
            [urls.small, urls.medium, urls.large, req.params.id]
        );
        res.json({ success: true, id: rows[0].id, url: urls.small });
    } catch (error) {
        console.error('Upload failed:', error.message);
        res.status(500).send({ success: false, message: 'Failed to upload image.', error: error.message });
    }
});

//``````````````
app.listen(port, () => {
    console.log("Server is listening to port " + port)
});