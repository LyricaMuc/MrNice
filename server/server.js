const http = require('http');
const express = require('express');


const hostname = '127.0.0.1';
const port = 3001;


const app = express();

// API Routes
app.get('/api/users', (req, res) => {

    const users = [
        {
            id: 1,
            name: 'Patrick Ferrari'
        }, 
        {
            id: 2,
            name: 'Max Mustermann'
        }
    ];
    res.json(users);
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});