const data = require('../../../db/data.json');
const { writeFile } = require('fs');

let formattedData = [];

data.forEach((data, i) => {

    let { id, email, phone, name, hours, dates } = data;

    let hero = {};

    hero.id = id;
    hero.order = i + 1;
    hero.name = name;
    hero.email = email;
    hero.phone = phone;
    hero.hours = hours;

    let days = {};
    let sessions = [];

    dates.sort().forEach(d => {
        let date = new Date(d).toLocaleDateString();

        Object.keys(days).includes(date)
            ? days[date] += 0.5
            : days[date] = 0.5;
    });

    Object.entries(days).forEach(([date, hours]) => {
        sessions.push({ date: date, hours: hours, notes: '' });
    });

    hero.sessions = sessions;

    formattedData.push(hero);

});

writeFile('./db/data2.json', JSON.stringify(formattedData), err=> {
    if (err) {
        console.log(err);
        
    }
})

// console.log(JSON.stringify(formattedData));