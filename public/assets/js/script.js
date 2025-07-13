let data = [], tutorDiv, sec, filterData, owed, purchasedTime, owedTime, value, totalPurchased, totalOwed, parent, totalTutored, totalActive;

const purchase = (i, id) => {

    let index = data.indexOf(data.find(obj => obj.id == id));
    parent = document.getElementById(`row_${id}`);
    
    purchasedTime = i == 1 ? 1 : i == 2 ? 5 : i == 0 ? 0.5 : i == 3 ? 10 : 20;
    owed = parent.querySelector('.owed');
    owedTime = parseFloat(owed.innerText);
    totalActive = document.querySelectorAll('.activeClients')[3];

    if (!owedTime) totalActive.innerText = parseInt(totalActive.innerText) + 1;

    value = owedTime + purchasedTime;

    owed.innerText = value;
    data[index].hours[i] += 1;

    if (document.getElementById('oweId')) oweId.innerText = value;

    if (document.getElementById('detailHead')) {
        let hourDivIndex = i == 0 ? 1 : i == 1 ? 3 : i == 2 ? 5 : i == 3 ? 7 : 9;
        detailHead.children[1].children[hourDivIndex].innerText = data[index].hours[i];
        detailHead.children[1].children[11].innerText =
            parseFloat(detailHead.children[1].children[11].innerText) + purchasedTime;
    };

    totalPurchased = document.querySelectorAll('.activeClients')[0];
    totalPurchased.innerText = parseFloat(totalPurchased.innerText) + purchasedTime;

    totalOwed = document.querySelectorAll('.activeClients')[2];
    totalOwed.innerText = parseFloat(totalOwed.innerText) + purchasedTime;

    pushData(data);
};

const details = id => {
    let hero = data.find(obj => obj.id == id);
    let total = hero.hours[0] * 0.5 + hero.hours[1] + hero.hours[2] * 5 + hero.hours[3] * 10 + hero.hours[4] * 20;

    if(document.querySelector('.section_2')) document.querySelector('.section_2').remove();

    document.getElementById(`row_${id}`).innerHTML += '<div class="section_2"></div>';

    hDiv = document.querySelector('.section_2');

    hDiv.innerHTML += `
            <div id='detailHead'>
                <div>
                    <div>email</div> 
                    <div>${hero.email}</div>
                </div>
                <div>
                    <div>1/2 h</div>
                    <div>${hero.hours[0]}</div>
                    <div>1 h</div>
                    <div>${hero.hours[1]}</div>
                    <div>5 hs</div>
                    <div>${hero.hours[2]}</div>
                    <div>10 hs</div>
                    <div>${hero.hours[3]}</div>
                    <div>20 hs</div>
                    <div>${hero.hours[4]}</div>
                    <div>Total</div>
                    <div>${total}</div>
                </div>
                <div>
                    <div>Phone</div>
                    <div>${hero.phone}</div>
                </div>
            </div>
            <div id='tutorDiv'></div>
            <div class='hoursDiv'></div>
        `;

    let tableLen = parseInt(hDiv.getBoundingClientRect().width / 260);

    for (let i = 0; i < tableLen; i++) document.querySelector('.hoursDiv').innerHTML += `
                <table>
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>HOURS</th>
                            <th>NOTES</th>
                        </tr>
                    </thead>
                    <tbody class='tRow'></tbody>
                </table>
        `;

    let len = 0;

    hero.sessions.forEach(obj => {

        if (len == tableLen) len = 0;

        document.querySelectorAll(".tRow")[len].innerHTML += `
            <tr class='hourRow' onmouseover='handleDetailNotes(this)' onmouseout='clearDetailNotes(this)'>
                <td>${obj.date}</td>
                <td>${obj.hours}</td>
                <td class='notes'>${obj.notes} <div class='detailNotes'><p>${obj.notes}</p></div></td>
            </tr>
            `
        len++;
    });

    h = `${hDiv.getBoundingClientRect().height}px`;
    hDiv.style.height = 0;
    hDiv.style.position = 'relative';
    hDiv.style.opacity = 1;
    setTimeout(() => { hDiv.style.height = h }, 1);
};

const renderDetails = id => {

    tutorDiv = document.getElementById('tutorDiv');
    sec = document.querySelector('.section_2');

    if (sec && tutorDiv) {

        sec.style.height = 0;
        tutorDiv.style.height = 0;
        setTimeout(() => {
            tutorDiv.remove();
            sec.remove();
        }, 1100);

    } else if (sec) {

        sec.style.height = 0;
        setTimeout(() => {
            sec.remove();
        }, 1100);

    } else if (tutorDiv) {

        tutorDiv.style.height = 0;
        setTimeout(() => {
            tutorDiv.remove();
            details(id);
        }, 1100);

    } else { details(id) };

};

const renderRows = async data => {

    main.innerHTML = '';

    data.forEach(hero => {

        let owed = (hero.hours[0] * 0.5 + hero.hours[1] + hero.hours[2] * 5 + hero.hours[3] * 10 + hero.hours[4] * 20) - hero.sessions.map(t => t.hours).reduce((a, b) => a + b, 0);

        main.innerHTML += `
            <div id="row_${hero.id}" class="row">
                <table>
                    <tr>
                        <td><input id="${hero.id}" onchange="ch_order(this)" value="${hero.order}"></td>
                        <td>${hero.name}</td>
                        <td><button onclick="renderDetails('${hero.id}')">Details</button></td>
                        <td>
                            <button onclick="purchase(0, '${hero.id}')">1/2</button>
                            <button onclick="purchase(1, '${hero.id}')">1</button>
                            <button onclick="purchase(2, '${hero.id}')">5</button>
                            <button onclick="purchase(3, '${hero.id}')">10</button>
                            <button onclick="purchase(4, '${hero.id}')">20</button>
                        </td>
                        <td>
                            <button onclick="tutorFx('${hero.id}')">- 1/2 hour</button>
                        </td>
                        <td class='owed'>${owed}</td>
                    </tr>
                </table>
            </div>`;
    })
};

const handleNotes = ({ value }, i) => {
    data[i].sessions[data[i].sessions.length - 1].notes = value;
};

const handleDetailNotes = el => {

    let detailNotes = el.querySelector('.detailNotes');

    if (detailNotes.innerText) {
        detailNotes.style.display = 'block';
        document.querySelector('.section_2').style.overflow = 'visible';
    };
};

const clearDetailNotes = el => {

    let detailNotes = el.querySelector('.detailNotes');

    if (detailNotes.style.display == 'block') {
        detailNotes.style.display = 'none';
        document.querySelector('.section_2').style.overflow = 'hidden';
    };

};

document.querySelectorAll('.hourRow').forEach(el => {
    el.addEventListener('mouseout', () => el.querySelector('.detailNotes').style.display = 'none')
});

const handleSubmit = async id => {

    await pushData(data);

    sec = document.querySelector('.section_2');
    tutorDiv = document.getElementById('tutorDiv');

    if (sec) {
        
        tutorDiv.innerHTML = '';
        tutorDiv.style.height = 0;
        sec.style.height = `${sec.getBoundingClientRect().height - 250}px`;
        setTimeout(() => details(id), 1000);

    } else {
        
        document.getElementById('tutorDiv').style.height = 0;
        setTimeout(() => document.getElementById('tutorDiv').remove(), 1000);

    };
};

const tutorFx = id => {

    let hourIndex;
    let today = new Date().toLocaleDateString();
    tutorDiv = document.getElementById('tutorDiv');
    let dIndex = data.indexOf(data.find(obj => obj.id == id));
    let hourObj = data[dIndex].sessions.find(({ date }) => date == today);
    
    totalTutored = document.querySelectorAll('.activeClients')[1];
    totalOwed = document.querySelectorAll('.activeClients')[2];
    parent = document.getElementById(`row_${id}`);
    sec = document.querySelector('.section_2');
    owed = parent.querySelector('.owed');

    totalActive = document.querySelectorAll('.activeClients')[3];
    if(parseFloat(owed.innerText) == 0.5) totalActive.innerText = parseInt(totalActive.innerText) - 1; 

    owed.innerText = parseFloat(owed.innerText) - 0.5;
    totalOwed.innerText = parseFloat(totalOwed.innerText) - 0.5;
    totalTutored.innerText = parseFloat(totalTutored.innerText) + 0.5;



    if (hourObj) {
        hourIndex = data[dIndex].sessions.indexOf(hourObj);
        data[dIndex].sessions[hourIndex].hours += 0.5;
    } else {
        data[dIndex].sessions.push({ date: today, hours: 0.5, notes: '' });
        hourIndex = data[dIndex].sessions.length - 1;
    };

    let sessions = data[dIndex].sessions[hourIndex].hours;

    if (sec) {

        let el = document.getElementById('tutorDiv');

        el.innerHTML = `
            <table class='tutorInnerDiv'>
                    <tbody>
                        <tr><td colspan='2'"><h3>${new Date().toDateString()}</h3></td></tr>
                        <tr><td><h4>Hours Tutored Today</h4></td><td id='tutorId'>${sessions}</td></tr>
                        <tr><td><h4>Total Hours Owed </h4></td><td id='oweId'>${owed.innerText}</td></tr>
                        <tr><td colspan='2'><label>Notes</label></td></tr>
                        <tr><td colspan='2'><textarea onchange="handleNotes(this,${dIndex})">${data[dIndex].sessions[hourIndex].notes}</textarea></td></tr>
                        <tr><td colspan='2'><button onclick='handleSubmit("${id}")'>Submit</button></td></tr>
                    </tbody>
                </table>      
        `;

        if (!el.getBoundingClientRect().height) {
            el.style.height = '250px';
            sec.style.height = `${sec.getBoundingClientRect().height + 250}px`;
        };

    } else if (tutorDiv) {

        document.getElementById('tutorId').innerText = sessions;
        document.getElementById('oweId').innerText = owed.innerText;

    } else {

        document.getElementById(`row_${id}`).innerHTML += `
            <div id='tutorDiv'>
                <table class='tutorInnerDiv'>
                    <tbody>
                        <tr><td colspan='2'"><h3>${new Date().toDateString()}</h3></td></tr>
                        <tr><td><h4>Hours Tutored Today</h4></td><td id='tutorId'>${sessions}</td></tr>
                        <tr><td><h4>Total Hours Owed </h4></td><td id='oweId'>${owed.innerText}</td></tr>
                        <tr><td colspan='2'><label>Notes</label></td></tr>
                        <tr><td colspan='2'><textarea onchange="handleNotes(this,${dIndex})">${data[dIndex].sessions[hourIndex].notes}</textarea></td></tr>
                        <tr><td colspan='2'><button onclick='handleSubmit("${id}")'>Submit</button></td></tr>
                    </tbody>
                </table>
            </div>`;

        tutorDiv = document.getElementById('tutorDiv');
        setTimeout(() => tutorDiv.style.height = '250px', 1);
    };

    // update data
};

const init = async heroId => {

    let fetchUrl = heroId ? fetch(`/api/sortdata/${heroId}`, { method: 'PUT' }) : fetch('/api/getdata');
    data = await (await fetchUrl).json();

    let sessions = data.map(({ sessions }) => sessions.map(({ hours }) => hours).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);
    let purchased = data.map(({ hours }) => hours[0] * 0.5 + hours[1] + hours[2] * 5 + hours[3] * 10 + hours[4] * 20).reduce((a, b) => a + b, 0);

    let activeClients = data.map(({ hours, sessions }) => {
        let purchased = (hours[0] * 0.5 + hours[1] + hours[2] * 5 + hours[3] * 10 + hours[4] * 20);
        sessions = sessions.map(({ hours }) => hours).reduce((a, b) => a + b, 0)
        return purchased > sessions ? 1 : 0
    }).reduce((a, b) => a + b, 0);

    container.innerHTML = `
    <div id="newClientDiv" class="row">
        <div id="summary">
            <label for="">Total Purchased</label>
            <span class="activeClients">${purchased}</span>
            <label for="">Total Tutored</label>
            <span class="activeClients">${sessions}
            </span>
            <label for="">Total Owed</label>
            <span class="activeClients">${purchased - sessions}
            </span>
            <label for="activeClients">Active Heroes</label>
            <span class="activeClients">${activeClients}</span>
        </div>
        <div id="addHeroDiv">
            <input id="heroName" placeholder="Hero's Name">
            <input id="email" placeholder="super@heroes.com">
            <input id="number" placeholder="1 (123) 456-7890">
            <button id="addHero" >Add Hero</button>
        </div>
    </div>

    <table id="table">
        <thead>
            <th>order</th>
            <th>Name</th>
            <th>Details</th>
            <th>Purchase Hours</th>
            <th>Tutored Time</th>
            <th>Time Owed</th>
        </thead>
    </table>

    <main id="main"></main>`;

    document.getElementById('addHero').onclick = async () => {
        if (heroName.value && email.value && number.value) {

            data = data.map(obj => {
                let order = obj.order + 1;
                return { ...obj, order }
            });

            data = [{
                id: Math.floor(Math.random() * 1000000).toString(16),
                order: 1,
                email: email.value,
                phone: number.value,
                name: heroName.value,
                hours: [0, 0, 0, 0, 0],
                sessions: []
            }, ...data];

            heroName.value = '';
            email.value = '';
            number.value = '';

            await pushData(data);
            renderRows(data);
        }
    }

    renderRows(data);
};

const pushData = async (data) =>
    await fetch('/api/adddata', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });

const ch_order = async ({ id, value }) => {

    if (value < 1 || value > data.length) return alert('Order is out of range.');

    let el = data.find(obj => obj.id == id);
    el.order = parseInt(value);

    data = data.filter(obj => obj.id != id).map((obj, i) => {
        let order = i + 1;
        if (order >= value) order++;

        return { ...obj, order };
    });

    data.push(el);
    data = data.sort((a, b) => a.order - b.order);

    await pushData(data);
    renderRows(data);
};

init();

