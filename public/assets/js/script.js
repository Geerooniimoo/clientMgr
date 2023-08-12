let data = [];

const handleClients = async () => {
    
    data = await ( await fetch('/api/getdata')).json();

    if(data) {
        main.innerHTML = '';
        data.forEach(({id,name,hours,dates,tutored, owe}) => {
        
        remainHours.innerHTML = data.map(({owe}) => owe).reduce((a,b)=>a+b);
        activeClients.innerHTML = data.map(({owe}) => owe ? 1 : 0).reduce((a,b)=>a+b);

        main.innerHTML += `
        <div class="row">
            <div class="titleDiv">
                <p class="title">${name.toUpperCase()}</p>
                <button class="filter">Filter</button>
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
                <p class="remain">${owe}</p>
            </div>
        </div>
            `;
        });
    };
};

handleClients();

const addClient = async () => {
    
    if(newClient.value) {

        let newPerson = await (await fetch('/api/addclient', {
            method: 'POST',
            body: JSON.stringify({name:newClient.value}),
            headers: {'Content-Type': 'application/json'}
        })).json()

        data = [newPerson, ...data];

        handleClients();
    };
};

const addTime = async (id,i) => {
    let timeAdded = await fetch(`/api/addtime/${i}`, {
        method: 'PUT',
        body: JSON.stringify({"id":id}),
        headers: {'Content-Type': 'application/json'},
    });

    if(timeAdded.ok) {
        data.find(obj=>obj.id==id).hours[i] += 1;
        handleClients();
    };
};

const tutored = async id => {

    let date = Date.now();
    
    let timeRemoved = await fetch(`/api/removetime/${id}`,{ 
        method: 'PUT',
        body: JSON.stringify({date}),
        headers: {
            'Content-Type': 'application/json'
        } 
    });

    if(timeRemoved.ok) {
        data.find(obj=>obj.id==id).dates.push(date);
        data.find(obj=>obj.id==id).tutored += .5;
        handleClients();
    };
};
