import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect("Your string").then(() => {console.log("DB connected")}).catch();

app.get('/', (req, res) => {
    res.send("Hello from server");
});

app.get('/about', (req, res) => {
    res.send("This is the about us page");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
