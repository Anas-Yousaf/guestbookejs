const express = require('express');
const mongoose = require('mongoose');
const Guest = require('./models/Guest');
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/guestbook')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', async (req, res) => {
    try {
        const guests = await Guest.find().sort({ createdAt: -1 });
        res.render('guestbook.ejs', { guests });
    } catch (error) {
        console.error('Error fetching guests:', error);
        res.status(500).send('Error fetching guests');
    }
});

app.post('/addguest', async (req, res) => {
    try {
        const guest = new Guest({
            guestName: req.body.guestName,
            guestMsg: req.body.guestMsg
        });
        await guest.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error adding guest:', error);
        res.status(500).send('Error adding guest');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});