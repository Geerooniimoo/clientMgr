let data = [];

const handleClients = async focusId => {

    let fetchUrl = focusId ? fetch(`/api/sortdata/${focusId}`, { method: 'PUT' }) : fetch('/api/getdata');
    data = await (await fetchUrl).json()

    main.innerHTML = '';

    let totalHourSold = data.map(({ hours: [half, one, five, ten, twenty] }) => half * .5 + one + five * 5 + ten * 10 + twenty * 20).reduce((a, b) => a + b);
    let totalHourTutored = data.map(({ dates }) => dates.length).reduce((a, b) => a + b) / 2;

    remainHours.innerHTML = totalHourSold - totalHourTutored;

    let aClientCount = 0;

    data.forEach(({ id, name, phone, email, hours, dates }) => {
        let purchased = hours[0] * 0.5 + hours[1] + hours[2] * 5 + hours[3] * 10 + hours[4] * 20;
        let owe = purchased - dates.length / 2;

        if(owe) aClientCount += 1;

        if (focusId == id) {
            let dateCount = {};
            dates = dates.map(d => new Date(d).toDateString().slice(0, 10));
            dates.forEach(d => dateCount[d] ? dateCount[d] += .5 : dateCount[d] = .5);

            console.log(dates);

            main.innerHTML += `
                    <div class="row focusDiv">
                        <div class="focusHead">
                            <h1>${name.toUpperCase()}</h1>
                            <h1>${phone}</h1>
                            <h1>${email}</h1>
                        </div>
                        <h4>Hours Report</h4>
                        <h4>Tutored Dates</h4>
                        <div class="hourDiv">
                            <table style="width:100%">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>1/2</th>
                                        <th>1</th>
                                        <th>5</th>
                                        <th>10</th>
                                        <th>20</th>
                                        <th>purchased</th>
                                        <th>tutored</th>
                                        <th>owe</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Hours</td>
                                        <td>${hours[0]}</td>
                                        <td>${hours[1]}</td>
                                        <td>${hours[2]}</td>
                                        <td>${hours[3]}</td>
                                        <td>${hours[4]}</td>
                                        <td>${purchased}</td>
                                        <td>${dates.length / 2}</td>
                                        <td>${owe}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div style="width:100%">
                                <button style="width:15%;height:40px" onclick="addTime('${id}',0)" class="half">1/2</button>
                                <button style="width:15%;height:40px" onclick="addTime('${id}',1)" class="one">1</button>
                                <button style="width:15%;height:40px" onclick="addTime('${id}',2)" class="five">5</button>
                                <button style="width:15%;height:40px" onclick="addTime('${id}',3)" class="twenty">10</button>
                                <button style="width:15%;height:40px" onclick="addTime('${id}',4)" class="twenty">20</button>
                                <button style="width:17.5%;height:40px" onclick="focusTutored('${id}')" class="minusHalf">- 1/2 hr</button>
                        </div>
                        </div>

                        <div class="datesDiv">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody">
                                </tbody>
                            </table>
                        </div>
                    </div>`;

            let cols = 3;
            let row = document.createElement('tr');

            Object.entries(dateCount).forEach(([d, c]) => {
                row.innerHTML += `<td>${d}</td><td>${c}</td>`;

                cols--;
                if (!cols) {
                    cols = 3;
                    tbody.appendChild(row);
                    row = document.createElement('tr');
                };
            });

            tbody.appendChild(row);

        } else {
            main.innerHTML += `
                <div class="row">
                    <div class="titleDiv">
                        <p class="title">${name.toUpperCase()}</p>
                        <button class="focus" onclick="focusFx('${id}')">focus</button>
                    </div>
                    <div class="btnsDiv">
                        <button onclick="addTime('${id}',0)" class="half">1/2</button>
                        <button onclick="addTime('${id}',1)" class="one">1</button>
                        <button onclick="addTime('${id}',2)" class="five">5</button>
                        <button onclick="addTime('${id}',3)" class="twenty">10</button>
                        <button onclick="addTime('${id}',4)" class="twenty">20</button>
                    </div>
                    <div class="remainDiv">
                        <button onclick="tutored('${id}')" class="minusHalf">- 1/2 hour</button>
                        <span class="remain">${owe}</span>
                    </div>
                </div>`;
        }
    });

    activeClients.innerHTML = aClientCount;
};

handleClients();

const addClient = async () => {

    if (newClient.value) {

        let newPerson = await (await fetch('/api/addclient', {
            method: 'POST',
            body: JSON.stringify({ name: newClient.value, email: newEmail.value, phone: newNumber.value }),
            headers: { 'Content-Type': 'application/json' }
        })).json()

        data = [newPerson, ...data];

        handleClients();
    };
};

const addTime = async (id, i) => {
    let timeAdded = await fetch(`/api/addtime/${i}`, {
        method: 'PUT',
        body: JSON.stringify({ "id": id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (timeAdded.ok) {
        data.find(obj => obj.id == id).hours[i] += 1;
        handleClients();
    };
};

const tutored = async id => {

    let date = Date.now();

    let timeRemoved = await fetch(`/api/removetime/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ date }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (timeRemoved.ok) {
        data.find(obj => obj.id == id).dates.push(date);
        data.find(obj => obj.id == id).tutored += .5;
        handleClients();
    };
};

const focusTutored = async id => {

    let date = Date.now();

    let timeRemoved = await fetch(`/api/removetime/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ date }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (timeRemoved.ok) {
        data.find(obj => obj.id == id).dates.push(date);
        data.find(obj => obj.id == id).tutored += .5;
        handleClients(id);
    };
};

const focusFx = async id => {
    data = [data.find(obj => obj.id == id), ...data.filter(obj => obj.id != id)];
    handleClients(id);
};