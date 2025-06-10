let data = [], tutorDiv, sec;

const fx = i => {
    let dts = [];

    let output = `
        ,
        {
            "id" : "${data[i].id}",
            "email": "${data[i].email}",
            "phone": "${data[i].phone}",
            "name": "${data[i].name}", 
            "hours": [${data[i].hours}],
            "tutored": [
        `;

    data[i].dates.map(d => {
        let d2 = new Date(d).toLocaleDateString();

        Object.keys(dts).includes(`date_${d2}`)
            ? dts[`date_${d2}`].hours += 0.5
            : dts[`date_${d2}`] = { date: d2, hours: 0.5, notes: "" };
    });

    Object.values(dts).forEach(obj => {
        output += "\t\t\t{"
        Object.entries(obj).forEach(([k, v]) => {
            k == "hours" ? output += `"${k}": ${v}, ` :
                k == "notes" ? output += `"${k}": "${v}" ` : output += `"${k}": "${v}", `;
        });

        output += "},\n"
    });

    output += `\t\t]
\t}`

};

const ch_order = ({ id, value }) => {

    if (value < 1 || value > data.length) return alert('Order is out of range.');

     let el =data.find(obj => obj.id == id);
     data = data.filter(obj => obj.id != id);

    el.id = value;

     data = data.map((obj, i) => {
        let id = i + 1;
        if (id >= value) id++;

        return { ...obj, id };
    });

    data.push(el);

    // need to update data;
    data = d;
    init();
};

const purchase = (i, id) => {

    let sec = document.querySelector('.section_2');
    if (sec) sec.style.height = 0;

    let parent = document.getElementById(`row_${id}`);
    let tutorDiv = document.getElementById('tutorDiv');
    let owed = parent.querySelector('.owed');

    if(tutorDiv) {
        if(tutorDiv.parentElement != parent) {
            tutorDiv.style.height = 0;
            setTimeout(()=>document.location.reload(),1100);
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

    if ( sec && tutorDiv) {
        
        sec.style.height = 0;
        tutorDiv.style.height = 0;
        setTimeout(()=>document.location.reload(), 1100);

    } else if ( sec ) {
        
        sec.style.height = 0;
        setTimeout(()=>document.location.reload(), 1100);
        
    } else if ( tutorDiv) {
        
        tutorDiv.style.height = 0;
        setTimeout(()=>document.location.reload(), 1100);
        
    } else {

         let hero =data.find(obj => obj.id == id);
        let total = hero.hours[0] * 0.5 + hero.hours[1] + hero.hours[2] * 5 + hero.hours[3] * 10 + hero.hours[4] * 20;

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

        hero.tutored.forEach(obj =>
            document.getElementById(`row_${id}`).querySelector(".hoursDiv").innerHTML += `
            <div>
                <div>DATE</div>
                <div>${obj.date}</div>
                <div>HOURS</div>
                <div>${obj.hours}</div>
                <div>NOTES</div>
                <div>${obj.notes}</div>
            </div>
        `);

        h = `${hDiv.getBoundingClientRect().height*1.3}px`;
        hDiv.style.height = 0;
        hDiv.style.position = 'relative';
        hDiv.style.opacity = 1;
        setTimeout(()=>{hDiv.style.height = h},1);
    }; 
};

const renderRows =   data => {

     data = data.sort((a, b) => a.id - b.id);

    main.innerHTML = '';

    data.forEach(hero=>{

        let owed = (hero.hours[0] * 0.5 + hero.hours[1] + hero.hours[2] * 5 + hero.hours[3] * 10 + hero.hours[4] * 20) - hero.sessions.map(t => t.hours).reduce((a, b) => a + b,0);

        main.innerHTML += `
            <div id="row_${hero.id}" class="row">
                <table>
                    <tr>
                        <td><input id="${hero.id}" onchange="ch_order(this)" value="${hero.id}"></td>
                        <td>${hero.name}</td>
                        <td><button onclick="renderDetails(${hero.id})">Details</button></td>
                        <td>
                            <button onclick="purchase(0, ${hero.id})">1/2</button>
                            <button onclick="purchase(1, ${hero.id})">1</button>
                            <button onclick="purchase(2, ${hero.id})">5</button>
                            <button onclick="purchase(3, ${hero.id})">10</button>
                            <button onclick="purchase(4, ${hero.id})">20</button>
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

const activeHerosFx = () => {
    let active_Heroes = 0;
    let tutored = 0;

    data.forEach(obj=>tutored+=obj.tutored);
    
    data.map(obj => {

        let purchased =
            obj.hours[1] +
            obj.hours[2] * 5 +
            obj.hours[3] * 10 +
            obj.hours[4] * 20 +
            obj.hours[0] * 0.5;

        active_Heroes += (purchased - tutored) > 0 ? 1 : 0;
    })

    return active_Heroes;
};

const handleNotes = ({ value }, i) => {
    data[i].tutored[data[i].tutored.length - 1].notes = value;
};

const handleSubmit = (e, i) => {
    document.getElementById('tutorDiv').style.height = 0;
    setTimeout(() => document.getElementById('tutorDiv').remove(), 1000);
};

const tutorFx = id => {

    let hourIndex;
    let today = new Date().toLocaleDateString();
     let dIndex =data.indexOf(d.find(obj => obj.id == id));
    let hourObj = data[dIndex].tutored.find(({ date }) => date == today);

    sec = document.querySelector('.section_2');

    if (hourObj) {
        hourIndex = data[dIndex].tutored.indexOf(hourObj);
        data[dIndex].tutored[hourIndex].hours += 0.5;
    } else {
        data[dIndex].tutored.push({ date: today, hours: 0.5, notes: '' });
        hourIndex = data[dIndex].tutored.length - 1;
    };

    let tutored = data[dIndex].tutored[hourIndex].hours;
    let owed = parseFloat(document.getElementById(`row_${id}`).querySelector('.owed').innerText) - tutored;
    document.getElementById(`row_${id}`).querySelector('.owed').innerText = owed;

    if (

        tutorDiv &&
        tutorDiv.parentElement.id.split('_')[1] != id

    ) {

        tutorDiv.style.height = 0;
        setTimeout(() => { document.location.reload() }, 1100);
        
    } else if ( sec ) {
        
        sec.style.height = 0;
        setTimeout(() => { document.location.reload() }, 1100);

    } else if ( tutorDiv ) {

        document.getElementById('tutorId').innerText = tutored;
        document.getElementById('oweId').innerText = owed;

    } else {

        document.getElementById(`row_${id}`).innerHTML += `
            <div id='tutorDiv'>
                <table class='tutorInnerDiv'>
                    <tbody>
                        <tr><td colspan='2'"><h3>${new Date().toDateString()}</h3></td></tr>
                        <tr><td><h4>Hours Tutored Today</h4></td><td id='tutorId'>${tutored}</td></tr>
                        <tr><td><h4>Total Hours Owed </h4></td><td id='oweId'>${owed}</td></tr>
                        <tr><td colspan='2'><label>Notes</label></td></tr>
                        <tr><td colspan='2'><textarea onchange="handleNotes(this,${dIndex})">${data[dIndex].tutored[hourIndex].notes}</textarea></td></tr>
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

    let fetchUrl = heroId ? fetch(`/api/sortdata/${heroId}`, { method: 'PUT'}) : fetch('/api/getdata');
    data = await ( await fetchUrl ).json();

    let purchased = data.map(({hours})=>hours.map((h,i)=>
        i == 0 ? h*0.5 : 
        i == 1 ? h : 
        i == 2 ? h*5 :
        i == 3 ? h*10 : 
        h * 20
    ).reduce((a,b)=>a+b,0)).reduce((a,b)=>a+b,0)

    let tutored = 0; 
    data.forEach(obj=>tutored+=obj.tutored);

    container.innerHTML = `
    <div id="newClientDiv" class="row">
        <div id="summary">
            <label for="totalPurchased">Total Purchased</label>
            <span id="activeClients">${purchased}</span>
            <label for="totalTutored">Total Tutored</label>
            <span id="activeClients">${tutored}
            </span>
            <label for="totalOwed">Total Owed</label>
            <span id="activeClients">${purchased - tutored}
            </span>
            <label for="activeClients">Active Heroes</label>
            <span id="activeClients">${activeHerosFx()}</span>
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

    document.getElementById('addHero').onclick = () => {
        if (heroName.value && email.value && number.value) {
             data =  [{ id:data.length + 1, email: email.value, phone: number.value, name: heroName.value, hours: [0, 0, 0, 0, 0], tutored: [] }, ...d];

            heroName.value = '';
            email.value = '';
            number.value = '';

             ch_order({ id:data.length, value: 1 })
        }
    }

    renderRows(data);
};

init();

