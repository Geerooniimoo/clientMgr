const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/data', (req,res) => res.json(require('./db/data.json')));
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Now listeing on http://localhost:${PORT}`));
