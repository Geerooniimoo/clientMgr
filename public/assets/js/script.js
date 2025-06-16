let data = [], tutorDiv, sec, filterData;

const purchase = (i, id) => {

    let sec = document.querySelector('.section_2');
    if (sec) sec.style.height = 0;

    let parent = document.getElementById(`row_${id}`);
    let tutorDiv = document.getElementById('tutorDiv');
    let owed = parent.querySelector('.owed');

    if (tutorDiv) {
        if (tutorDiv.parentElement != parent) {
            tutorDiv.style.height = 0;
            setTimeout(() => document.location.reload(), 1100);
        };
    }

    let value = parseFloat(owed.innerText) +
        (i == 1 ? 1 :
            i == 2 ? 5 :
                i == 0 ? 0.5 :
                    i == 3 ? 10 : 20);

    owed.innerText = value;

    if (document.getElementById('oweId')) oweId.innerText = value;

    data[id - 1].hours[i] += 1;
};

const renderDetails = id => {

    tutorDiv = document.getElementById('tutorDiv');
    sec = document.querySelector('.section_2');

    const details = () => {
        let hero = data.find(obj => obj.id == id);
        let total = hero.hours[0] * 0.5 + hero.hours[1] + hero.hours[2] * 5 + hero.hours[3] * 10 + hero.hours[4] * 20;

        console.log({ hero, total });


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
            <div class='hoursDiv'></div>
        `;

        hero.sessions.forEach(obj =>
            document.getElementById(`row_${id}`).querySelector(".hoursDiv").innerHTML += `
            <div class='hourRow' onmouseover='handleDetailNotes(this)' onmouseout='clearDetailNotes(this)'>
                <div>DATE</div>
                <div>${obj.date}</div>
                <div>HOURS</div>
                <div>${obj.hours}</div>
                <div>NOTES</div>
                <div class='notes'>${obj.notes}</div>
                <div class='detailNotes'>${obj.notes}</div>
            </div>
        `);

        h = `${hDiv.getBoundingClientRect().height}px`;
        hDiv.style.height = 0;
        hDiv.style.position = 'relative';
        hDiv.style.opacity = 1;
        setTimeout(() => { hDiv.style.height = h }, 1);
    };

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
            details();
        }, 1100);

    } else { details() };

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
                            <button onclick="purchase(0, ${hero.order})">1/2</button>
                            <button onclick="purchase(1, ${hero.order})">1</button>
                            <button onclick="purchase(2, ${hero.order})">5</button>
                            <button onclick="purchase(3, ${hero.order})">10</button>
                            <button onclick="purchase(4, ${hero.order})">20</button>
                        </td>
                        <td>
                            <button onclick="tutorFx(${hero.id})">- 1/2 hour</button>
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
    
}

document.querySelectorAll('.hourRow').forEach(el => {
    el.addEventListener('mouseout', () => el.querySelector('.detailNotes').style.display = 'none')
});

const handleSubmit = (e, i) => {
    document.getElementById('tutorDiv').style.height = 0;
    setTimeout(() => document.getElementById('tutorDiv').remove(), 1000);
};

const tutorFx = id => {

    let hourIndex;
    let today = new Date().toLocaleDateString();
    let dIndex = data.indexOf(d.find(obj => obj.id == id));
    let hourObj = data[dIndex].sessions.find(({ date }) => date == today);

    sec = document.querySelector('.section_2');

    if (hourObj) {
        hourIndex = data[dIndex].sessions.indexOf(hourObj);
        data[dIndex].sessions[hourIndex].hours += 0.5;
    } else {
        data[dIndex].sessions.push({ date: today, hours: 0.5, notes: '' });
        hourIndex = data[dIndex].sessions.length - 1;
    };

    let sessions = data[dIndex].sessions[hourIndex].hours;
    let owed = parseFloat(document.getElementById(`row_${id}`).querySelector('.owed').innerText) - sessions;
    document.getElementById(`row_${id}`).querySelector('.owed').innerText = owed;

    if (

        tutorDiv &&
        tutorDiv.parentElement.id.split('_')[1] != id

    ) {

        tutorDiv.style.height = 0;
        setTimeout(() => { document.location.reload() }, 1100);

    } else if (sec) {

        sec.style.height = 0;
        setTimeout(() => { document.location.reload() }, 1100);

    } else if (tutorDiv) {

        document.getElementById('tutorId').innerText = sessions;
        document.getElementById('oweId').innerText = owed;

    } else {

        document.getElementById(`row_${id}`).innerHTML += `
            <div id='tutorDiv'>
                <table class='tutorInnerDiv'>
                    <tbody>
                        <tr><td colspan='2'"><h3>${new Date().toDateString()}</h3></td></tr>
                        <tr><td><h4>Hours Tutored Today</h4></td><td id='tutorId'>${sessions}</td></tr>
                        <tr><td><h4>Total Hours Owed </h4></td><td id='oweId'>${owed}</td></tr>
                        <tr><td colspan='2'><label>Notes</label></td></tr>
                        <tr><td colspan='2'><textarea onchange="handleNotes(this,${dIndex})">${data[dIndex].sessions[hourIndex].notes}</textarea></td></tr>
                        <tr><td colspan='2'><button onclick='handleSubmit(this,${dIndex})'>Submit</button></td></tr>
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
            <label for="totalPurchased">Total Purchased</label>
            <span id="activeClients">${purchased}</span>
            <label for="totalTutored">Total Tutored</label>
            <span id="activeClients">${sessions}
            </span>
            <label for="totalOwed">Total Owed</label>
            <span id="activeClients">${purchased - sessions}
            </span>
            <label for="activeClients">Active Heroes</label>
            <span id="activeClients">${activeClients}</span>
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

