// const express = require('express');
// const cors = require ('cors');
// const app = express();
// // const port = 5000;

// const SpeechSynthesis = require ('./SpeechSynthesis');

// app.use(cors({ origin: '*' })); 
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api/language',SpeechSynthesis);

// const port = process.env.PORT || 3000;
// app.listen (port, () => console.log('server is running on ${port}'));

const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


const fromFile = require('./SpeechSynthesis');  // Import the middleware function

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the function for your /api/language endpoint
app.get('/api/language', fromFile);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

