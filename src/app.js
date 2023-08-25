require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connect to database');
}).catch((error) => {
    console.log('MongoDB connection error:', error);
});

app.use(express.json());
routes(app);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});