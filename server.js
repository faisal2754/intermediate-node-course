const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
const port = 4000;

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
    const userDetails = {
        name: req.body.newData.name,
        email: req.body.newData.email,
        password: req.body.newData.password
    };

    User.create(userDetails, (err, data) => {
        if (err) {
            res.json({ success: false, message: err });
        } else if (!data) {
            res.json({ success: false, message: 'Not found' });
        } else {
            res.json({ success: true, data: data });
        }
    });
});

app.route('/users/:id')
    // READ
    .get((req, res) => {
        User.findById(req.params.id, (err, data) => {
            if (err) {
                res.json({ success: false, message: err });
            } else if (!data) {
                res.json({ success: false, message: 'Not found' });
            } else {
                res.json({ success: true, data: data });
            }
        });
    })
    // UPDATE
    .put((req, res) => {
        User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.newData.name,
                email: req.body.newData.email,
                password: req.body.newData.password
            },
            {
                new: true
            },
            (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else if (!data) {
                    res.json({
                        success: false,
                        message: 'Not Found'
                    });
                } else {
                    res.json({
                        success: true,
                        data: data
                    });
                }
            }
        );
    })
    // DELETE
    .delete((req, res) => {
        // User.findByIdAndDelete()
    });
