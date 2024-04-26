const express=require('express');
const mongoose=require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const bookRoutes=require('./routes/bookRoutes')

const app=express();

app.use(bodyParser.json());
require('dotenv').config(); // load environment variables from .env file

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});