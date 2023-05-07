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

    if (Object.keys(req.body).length === 0) {
        res.status(400).send({success: false, error: 'Bitte fülle das Formular aus' });

    } else {
        if (!('firstname' in req.body)) {
            res.status(400).send({success: false, error: 'Bitte gebe Deinen Vornamen an' });
        }
        
        res.status(200).send({success: true});
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});