const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const hostname = '127.0.0.1';
const port = 3001;


const app = express();
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.post('/user', (req, res) => {
try {
    const { firstname, lastname, email } = req.body;
    console.log(`Hallo ${firstname} ${lastname} mit der Email Adresse ${email}`);
    res.send({ success: true });
} catch (error) {
    console.log(error);
}
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});