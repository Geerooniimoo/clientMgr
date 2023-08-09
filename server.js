const express = require('express');
const { writeFile } = require('fs');
let store = require('./db/data.json');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/api/data', (req,res) => {res.json(store)});

app.post('/api/data', ({body},res) => {
    
    writeFile('./db/data.json', JSON.stringify(body), err => {
        if(err) {console.log(err)};
        res.status(200);
    });
});

app.put('/api/data/:index', ({body,params},res) => {

    console.log(body,params.index);

    res.json('');

    
    // writeFile('./db/data.json', JSON.stringify(body), err => {
    //     if(err) {console.log(err)};
    //     res.status(200);
    // });
});

app.listen(PORT, () => console.log(`Now listeing on http://localhost:${PORT}`));
