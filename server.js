const express = require('express');
const { writeFile } = require('fs');
let store = require('./db/data2.json');
const { log } = require('console');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api/getdata', (req, res) => { res.json(store) });

app.post('/api/addclient', ({ body }, res) => {

    body.id = Math.floor(Math.random() * 1000000).toString(16);
    body.hours = [0, 0, 0, 0, 0];
    body.dates = [];
    body.tutored = 0;
    body.purchased = 0;
    body.owe = 0;

    store = [body, ...store];

    writeFile('./db/data.json', JSON.stringify(store), err => {
        if (err) { console.log(err) };
        res.json(body);
    });
});

app.put('/api/addtime/:timeindex', ({ body: { id }, params: { timeindex } }, res) => {

    let hoursToAdd = 
        timeindex == 0 ? .5 : 
        timeindex == 1 ? 1 : 
        timeindex == 2 ? 5 : 
        timeindex == 3 ? 10 : 20;

    store.find(obj => obj.id == id).owe += hoursToAdd;
    store.find(obj => obj.id == id).hours[timeindex] += 1
    store.find(obj => obj.id == id).purchased += hoursToAdd;

    writeFile('./db/data.json', JSON.stringify(store), err => {
        if (err) { console.log(err) };
        res.json();
    });
});

app.put('/api/removetime/:id', ({ body: { date }, params: { id } }, res) => {

    store.find(obj => obj.id == id).dates.push(date);
    store.find(obj => obj.id == id).tutored += .5;
    store.find(obj => obj.id == id).owe -= .5;

    writeFile('./db/data.json', JSON.stringify(store), err => {
        if (err) { console.log(err) };
        res.json();
    });
});

app.put('/api/sortdata/:id', ({ params:{id} }, res) => {

    store = [store.find(obj => obj.id == id), ... store.filter(obj => obj.id != id)];

    writeFile('./db/data.json', JSON.stringify(store), err => {
        if (err) { console.log(err) };
        res.json(store);
    });
});

app.listen(PORT, () => console.log(`Now listeing on http://localhost:${PORT}`));
