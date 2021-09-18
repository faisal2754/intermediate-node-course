const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
const port = 8000;

const app = express();
app.use(express.json());

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    () => console.log('Connected to db!')
);

app.listen(port, () => {
    console.log(`server is listening on port:${port}`);
});

// CREATE
app.post('/users', (req, res) => {
    // User.create()
});

app.route('/users/:id')
    // READ
    .get((req, res) => {
        // User.findById()
    })
    // UPDATE
    .put((req, res) => {
        // User.findByIdAndUpdate()
    })
    // DELETE
    .delete((req, res) => {
        // User.findByIdAndDelete()
    });
