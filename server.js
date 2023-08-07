const { log } = require('console');
const express = require('express');
const { writeFile } = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/api/data', (req,res) => res.json(require('./db/data.json')));

app.post('/api/data', ({body},res) => {

    console.log('Data:',body);
    
    writeFile('./db/data.json', JSON.stringify(body), err => {
        if(err) {console.log(err)};
        res.status(200);
    });
});

app.listen(PORT, () => console.log(`Now listeing on http://localhost:${PORT}`));
