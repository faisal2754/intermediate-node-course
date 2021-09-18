const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(express.json());

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
